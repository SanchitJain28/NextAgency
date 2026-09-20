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
  bgRed: "\x1b[41m",
};

interface TitleCheckResult {
  source: string;
  url: string;
  rawTitle: string;
  renderedTitle: string;
  charCount: number;
  pixelEstimate: number;
  status: "optimal" | "warning" | "error";
  message: string;
}

function estimateTitlePixels(title: string): number {
  let pixels = 0;
  for (const char of title) {
    if ("ilI1.,:';!|`".includes(char)) {
      pixels += 4.5;
    } else if ("fjrt ".includes(char)) {
      pixels += 6.5;
    } else if ("WM#_@%&".includes(char)) {
      pixels += 16;
    } else if ("ABCDEFGHJKLNOPQRSTUVXYZ".includes(char)) {
      pixels += 12;
    } else {
      pixels += 9.5;
    }
  }
  return Math.round(pixels);
}

function checkMarkdownFile(filePath: string): TitleCheckResult | null {
  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContent);
    if (!data.title) {
      return {
        source: filePath,
        url: `/blog/${path.basename(filePath, path.extname(filePath))}`,
        rawTitle: "",
        renderedTitle: "",
        charCount: 0,
        pixelEstimate: 0,
        status: "error",
        message: "Missing title in frontmatter",
      };
    }

    const rawTitle = String(data.title).trim();
    const slug = path.basename(filePath, path.extname(filePath));
    const renderedTitle =
      rawTitle.length > 47 ? rawTitle : `${rawTitle} | ScaleFront`;
    return evaluateTitle(filePath, `/blog/${slug}`, rawTitle, renderedTitle);
  } catch (error: any) {
    return {
      source: filePath,
      url: `/blog/${path.basename(filePath, path.extname(filePath))}`,
      rawTitle: "",
      renderedTitle: "",
      charCount: 0,
      pixelEstimate: 0,
      status: "error",
      message: `Error parsing file: ${error.message}`,
    };
  }
}

function checkPageFile(filePath: string): TitleCheckResult | null {
  try {
    let fileContent = fs.readFileSync(filePath, "utf8");
    const layoutPath = path.join(path.dirname(filePath), "layout.tsx");
    const hasMetadata =
      fileContent.includes("metadata") || fileContent.includes("generateMetadata");
    if (!hasMetadata && fs.existsSync(layoutPath)) {
      fileContent = fs.readFileSync(layoutPath, "utf8");
    }

    const titleMatch =
      fileContent.match(/(?:metadata|generateMetadata)[\s\S]*?title:\s*\{\s*absolute:\s*["'`]([^"'`]+)["'`]/) ||
      fileContent.match(/(?:metadata|generateMetadata)[\s\S]*?title:\s*\{\s*default:\s*["'`]([^"'`]+)["'`]/) ||
      fileContent.match(/(?:metadata|generateMetadata)[\s\S]*?title:\s*["'`]([^"'`]+)["'`]/) ||
      fileContent.match(/title:\s*\{\s*absolute:\s*["'`]([^"'`]+)["'`]/) ||
      fileContent.match(/title:\s*\{\s*default:\s*["'`]([^"'`]+)["'`]/) ||
      fileContent.match(/title:\s*["'`]([^"'`]+)["'`]/);

    if (!titleMatch) {
      return null;
    }

    const rawTitle = titleMatch[1].trim();
    let route = filePath
      .replace(/.*src\/app/, "")
      .replace(/\/\(app\)/g, "")
      .replace(/\/page\.tsx$/, "");
    if (route === "") route = "/";

    const isAbsolute =
      fileContent.includes("absolute:") || rawTitle.includes("ScaleFront");
    const renderedTitle = isAbsolute ? rawTitle : `${rawTitle} | ScaleFront`;

    return evaluateTitle(filePath, route, rawTitle, renderedTitle);
  } catch (error: any) {
    return null;
  }
}

function evaluateTitle(
  source: string,
  url: string,
  rawTitle: string,
  renderedTitle: string,
): TitleCheckResult {
  const len = renderedTitle.length;
  const pixels = estimateTitlePixels(renderedTitle);

  let status: "optimal" | "warning" | "error" = "optimal";
  let message = "Optimal length (50–60 characters)";

  if (len < 30) {
    status = "error";
    message = `Too short (${len} chars, ~${pixels}px). Absolute minimum is 30 chars. Wasting valuable SERP real estate.`;
  } else if (len >= 30 && len < 50) {
    status = "warning";
    message = `Slightly short (${len} chars, ~${pixels}px). Target 50–60 characters to maximize keywords.`;
  } else if (len > 70 || pixels > 600) {
    status = "error";
    message = `Too long (${len} chars, ~${pixels}px). Google almost always truncates or rewrites titles over 70 chars.`;
  } else if (len > 60) {
    status = "warning";
    message = `Borderline length (${len} chars, ~${pixels}px). Recommended sweet spot is 50–60 chars to prevent mobile truncation.`;
  }

  return {
    source,
    url,
    rawTitle,
    renderedTitle,
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
    `${colors.bold}${colors.cyan}  ScaleFront SEO Tool: Title Tag & Pixel Validator  ${colors.reset}`,
  );
  console.log(
    `${colors.bold}${colors.cyan}====================================================${colors.reset}\n`,
  );

  const results: TitleCheckResult[] = [];

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

  const titleMap = new Map<string, string[]>();
  for (const r of results) {
    if (r.renderedTitle) {
      const list = titleMap.get(r.renderedTitle) || [];
      list.push(r.url);
      titleMap.set(r.renderedTitle, list);
    }
  }

  let optimalCount = 0;
  let warningCount = 0;
  let errorCount = 0;

  for (const res of results) {
    const duplicates = titleMap.get(res.renderedTitle) || [];
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
      `   ${color}Title (${res.charCount}c, ~${res.pixelEstimate}px):${colors.reset} "${res.renderedTitle}"`,
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
    `  ${colors.green}✅ Optimal (50–60c):${colors.reset} ${optimalCount}`,
  );
  console.log(
    `  ${colors.yellow}⚠️  Warnings:${colors.reset}       ${warningCount}`,
  );
  console.log(
    `  ${colors.red}❌ Critical Errors:${colors.reset} ${errorCount}`,
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
      const duplicates = titleMap.get(r.renderedTitle) || [];
      return {
        ...r,
        isDuplicate: duplicates.length > 1,
        duplicateSources: duplicates.filter((u) => u !== r.url),
      };
    }),
  };

  const outputPath = path.join(outputDir, "title-check-report.json");
  fs.writeFileSync(outputPath, JSON.stringify(reportData, null, 2), "utf8");
  console.log(`${colors.dim}Report saved to ${outputPath}${colors.reset}\n`);

  if (errorCount > 0) {
    console.log(
      `${colors.red}${colors.bold}PRE-DEPLOY GATE FAILED:${colors.reset} ${errorCount} title(s) violate SEO specifications.`,
    );
    process.exit(1);
  } else {
    console.log(
      `${colors.green}${colors.bold}PRE-DEPLOY GATE PASSED:${colors.reset} All titles are valid for deployment.`,
    );
    process.exit(0);
  }
}

main();
