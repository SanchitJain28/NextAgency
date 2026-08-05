const fs = require('fs');
const zlib = require('zlib');

const html = fs.readFileSync('/Users/sanchitjain/vscode_files/NextAgency/next-agency/design-system/Scalefront-Home.html', 'utf-8');

// Extract the manifest JSON
const manifestMatch = html.match(/<script type="__bundler\/manifest">\s*([\s\S]*?)\s*<\/script>/);
if (!manifestMatch) {
  console.log('No manifest found');
  process.exit(1);
}

const manifest = JSON.parse(manifestMatch[1]);

// Extract the template
const templateMatch = html.match(/<script type="__bundler\/template">\s*([\s\S]*?)\s*<\/script>/);
if (templateMatch) {
  const template = JSON.parse(templateMatch[1]);
  fs.writeFileSync('/Users/sanchitjain/vscode_files/NextAgency/next-agency/design-system/extracted_template.html', template);
  console.log('Template extracted, length:', template.length);
}

// Decode each asset
for (const [uuid, entry] of Object.entries(manifest)) {
  try {
    const binaryStr = Buffer.from(entry.data, 'base64');
    let finalBytes = binaryStr;
    
    if (entry.compressed) {
      finalBytes = zlib.gunzipSync(binaryStr);
    }
    
    const content = finalBytes.toString('utf-8');
    const ext = entry.mime.includes('javascript') ? 'js' : 
                entry.mime.includes('css') ? 'css' : 
                entry.mime.includes('html') ? 'html' : 'bin';
    
    if (ext === 'js' || ext === 'css' || ext === 'html') {
      const filename = `/Users/sanchitjain/vscode_files/NextAgency/next-agency/design-system/extracted_${uuid.substring(0, 8)}.${ext}`;
      fs.writeFileSync(filename, content);
      console.log(`Extracted ${uuid.substring(0, 8)}.${ext} (${entry.mime}) - ${content.length} bytes`);
    } else {
      console.log(`Skipped ${uuid.substring(0, 8)} (${entry.mime}) - binary`);
    }
  } catch (err) {
    console.log(`Error with ${uuid.substring(0, 8)}: ${err.message}`);
  }
}
