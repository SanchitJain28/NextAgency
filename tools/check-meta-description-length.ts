import fs from "fs";
import path from "path";
import matter from "gray-matter";

const colors = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
  cyan: "\x1b[36m",
  blue: "\x1b[34m",
};

interface DescCheckResult {
  source: string;
  url: string;
  description: string;
  charCount: number;
  pixelEstimate: number;
  status: "optimal" | "warning" | "error";
  message: string;
}

function estimateDescPixels(desc: string): number {
  let pixels = 0;
  for (const char of desc) {
    if ("ilI1.,:';!|`".includes(char)) {
      pixels += 3.2;
    } else if ("fjrt ".includes(char)) {
      pixels += 4.5;
    } else if ("WM#_@%&".includes(char)) {
      pixels += 11;
    } else if ("ABCDEFGHJKLNOPQRSTUVXYZ".includes(char)) {
      pixels += 8.5;
    } else {
      pixels += 6.8;
    }
  }
  return Math.round(pixels);
}

function checkMarkdownFile(filePath: string): DescCheckResult | null {
  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContent);
    const slug = path.basename(filePath, path.extname(filePath));
    const url = `/blog/${slug}`;

    if (!data.description) {
      return {
        source: filePath,
        url,
        description: "",
        charCount: 0,
        pixelEstimate: 0,
        status: "error",
        message: "Missing meta description in frontmatter!",
      };
    }

    const desc = String(data.description).trim();
    return evaluateDescription(filePath, url, desc);
  } catch (error: any) {
    return {
      source: filePath,
      url: `/blog/${path.basename(filePath, path.extname(filePath))}`,
      description: "",
      charCount: 0,
      pixelEstimate: 0,
      status: "error",
      message: `Error reading file: ${error.message}`,
    };
  }
}

function checkPageFile(filePath: string): DescCheckResult | null {
  try {
    let fileContent = fs.readFileSync(filePath, "utf8");
    const layoutPath = path.join(path.dirname(filePath), "layout.tsx");
    const hasMetadata =
      fileContent.includes("metadata") || fileContent.includes("generateMetadata");
    if (!hasMetadata && fs.existsSync(layoutPath)) {
      fileContent = fs.readFileSync(layoutPath, "utf8");
    }

    const descMatch =
      fileContent.match(/(?:metadata|generateMetadata)[\s\S]*?description:\s*["'`]([^"'`]+)["'`]/) ||
      fileContent.match(/description:\s*["'`]([^"'`]+)["'`]/);

    let route = filePath
      .replace(/.*src\/app/, "")
      .replace(/\/\(app\)/g, "")
      .replace(/\/page\.tsx$/, "");
    if (route === "") route = "/";

    if (!descMatch) {
      if (filePath.includes("[slug]") || filePath.includes("studio")) {
        return null;
      }
      return {
        source: filePath,
        url: route,
        description: "",
        charCount: 0,
        pixelEstimate: 0,
        status: "error",
        message: "Missing meta description export in page metadata!",
      };
    }

    const desc = descMatch[1].trim();
    return evaluateDescription(filePath, route, desc);
  } catch (error: any) {
    return null;
  }
}

function evaluateDescription(
  source: string,
  url: string,
  desc: string,
): DescCheckResult {
  const len = desc.length;
  const pixels = estimateDescPixels(desc);

  let status: "optimal" | "warning" | "error" = "optimal";
  let message = "Optimal length (120–160 characters)";

  if (len === 0) {
    status = "error";
    message =
      "Missing meta description! Search engines will fallback to random body text.";
  } else if (len < 50) {
    status = "error";
    message = `Critically short (${len} chars, ~${pixels}px). Absolute minimum is 50 chars. Too thin for snippets and AI summaries.`;
  } else if (len < 120) {
    status = "warning";
    message = `Short description (${len} chars, ~${pixels}px). Recommended sweet spot is 120–160 chars.`;
  } else if (len > 160) {
    status = "error";
    message = `Too long (${len} chars, ~${pixels}px). Will be truncated with ellipsis '...' on desktop SERP (max 160 chars).`;
  } else {
    status = "optimal";
    message = `Optimal for desktop (${len} chars, ~${pixels}px). (Note: mobile truncates around 105–120 chars).`;
  }

  return {
    source,
    url,
    description: desc,
    charCount: len,
    pixelEstimate: pixels,
    status,
    message,
  };
}

async function main() {
  const args = process.argv.slice(2);
  const targetPath = args[0];

  console.log(
    `${colors.bold}${colors.cyan}====================================================${colors.reset}`,
  );
  console.log(
    `${colors.bold}${colors.cyan} ScaleFront SEO Tool: Meta Description Validator    ${colors.reset}`,
  );
  console.log(
    `${colors.bold}${colors.cyan}====================================================${colors.reset}\n`,
  );

  const results: DescCheckResult[] = [];

  if (targetPath) {
    console.log(
      `${colors.dim}Checking single file: ${targetPath}${colors.reset}\n`,
    );
    if (!fs.existsSync(targetPath)) {
      console.error(
        `${colors.red}Error: File not found: ${targetPath}${colors.reset}`,
      );
      process.exit(1);
    }

    if (targetPath.endsWith(".md") || targetPath.endsWith(".mdx")) {
      const res = checkMarkdownFile(targetPath);
      if (res) results.push(res);
    } else if (targetPath.endsWith(".tsx") || targetPath.endsWith(".ts")) {
      const res = checkPageFile(targetPath);
      if (res) results.push(res);
    }
  } else {
    console.log(
      `${colors.dim}Running sitewide scan across blog content and pages...${colors.reset}\n`,
    );

    const blogDir = path.join(process.cwd(), "src/content/blog");
    if (fs.existsSync(blogDir)) {
      const files = fs
        .readdirSync(blogDir)
        .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
      for (const file of files) {
        const res = checkMarkdownFile(path.join(blogDir, file));
        if (res) results.push(res);
      }
    }

    function scanPages(dir: string) {
      const list = fs.readdirSync(dir);
      for (const item of list) {
        const full = path.join(dir, item);
        const stat = fs.statSync(full);
        if (stat.isDirectory()) {
          scanPages(full);
        } else if (item === "page.tsx") {
          const res = checkPageFile(full);
          if (res) results.push(res);
        }
      }
    }
    const appDir = path.join(process.cwd(), "src/app");
    if (fs.existsSync(appDir)) {
      scanPages(appDir);
    }
  }

  const descMap = new Map<string, string[]>();
  for (const r of results) {
    if (r.description) {
      const list = descMap.get(r.description) || [];
      list.push(r.url);
      descMap.set(r.description, list);
    }
  }

  let optimalCount = 0;
  let warningCount = 0;
  let errorCount = 0;

  for (const res of results) {
    const duplicates = descMap.get(res.description) || [];
    const isDuplicate = duplicates.length > 1;

    let icon = "✅";
    let color = colors.green;

    if (res.status === "error" || isDuplicate) {
      icon = "❌";
      color = colors.red;
      errorCount++;
    } else if (res.status === "warning") {
      icon = "⚠️ ";
      color = colors.yellow;
      warningCount++;
    } else {
      optimalCount++;
    }

    console.log(`${icon} ${colors.bold}${res.url}${colors.reset}`);
    console.log(
      `   ${color}Description (${res.charCount}c, ~${res.pixelEstimate}px):${colors.reset} "${res.description.slice(0, 100)}${res.description.length > 100 ? "..." : ""}"`,
    );
    console.log(`   ${colors.dim}Status: ${res.message}${colors.reset}`);

    if (isDuplicate) {
      console.log(
        `   ${colors.red}${colors.bold}DUPLICATE DETECTED! Also used on: ${duplicates.filter((u) => u !== res.url).join(", ")}${colors.reset}`,
      );
    }
    console.log("");
  }

  console.log(
    `${colors.bold}----------------------------------------------------${colors.reset}`,
  );
  console.log(
    `${colors.bold}Summary:${colors.reset} Checked ${results.length} pages`,
  );
  console.log(
    `  ${colors.green}✅ Optimal (120–160c):${colors.reset} ${optimalCount}`,
  );
  console.log(
    `  ${colors.yellow}⚠️  Warnings (<120c):${colors.reset}   ${warningCount}`,
  );
  console.log(
    `  ${colors.red}❌ Critical Errors:${colors.reset}   ${errorCount}`,
  );
  console.log(
    `${colors.bold}----------------------------------------------------${colors.reset}\n`,
  );

  const outputDir = path.join(process.cwd(), "tools/output");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const reportData = {
    timestamp: new Date().toISOString(),
    totalPages: results.length,
    summary: {
      optimal: optimalCount,
      warnings: warningCount,
      errors: errorCount,
    },
    passed: errorCount === 0,
    results: results.map((r) => {
      const duplicates = descMap.get(r.description) || [];
      return {
        ...r,
        isDuplicate: duplicates.length > 1,
        duplicateSources: duplicates.filter((u) => u !== r.url),
      };
    }),
  };

  const outputPath = path.join(outputDir, "meta-description-report.json");
  fs.writeFileSync(outputPath, JSON.stringify(reportData, null, 2), "utf8");
  console.log(`${colors.dim}Report saved to ${outputPath}${colors.reset}\n`);

  if (errorCount > 0) {
    console.log(
      `${colors.red}${colors.bold}PRE-DEPLOY GATE FAILED:${colors.reset} ${errorCount} description(s) violate SEO specifications.`,
    );
    process.exit(1);
  } else {
    console.log(
      `${colors.green}${colors.bold}PRE-DEPLOY GATE PASSED:${colors.reset} All meta descriptions are valid for deployment.`,
    );
    process.exit(0);
  }
}

main();
