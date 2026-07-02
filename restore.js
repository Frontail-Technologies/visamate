const fs = require('fs');
const readline = require('readline');

async function processTranscript() {
  const transcriptPath = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\d6fef9b8-34a1-4ddd-a913-4d79a5ac33ac\\.system_generated\\logs\\transcript.jsonl';
  const fileStream = fs.createReadStream(transcriptPath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  const files = {};
  
  // We want the FIRST instance of the file content in the transcript, either from a view_file response or if the user provided it.
  for await (const line of rl) {
    try {
      const entry = JSON.parse(line);
      if (entry.type === 'TOOL_RESPONSE' && entry.tool_name === 'default_api:view_file') {
        const output = entry.output;
        // Output looks like:
        // Created At: ...\nCompleted At: ...\nFile Path: `file:///d:/visamate/components/home/cta-section.tsx`\n...
        // Showing lines 1 to X\n...
        // 1: ...
        
        const pathMatch = output.match(/File Path: `file:\/\/\/(.+?)`/);
        if (pathMatch) {
          let filePath = pathMatch[1].replace(/\//g, '\\');
          // For windows
          filePath = filePath.charAt(0).toUpperCase() + filePath.slice(1);
          
          if (!files[filePath]) {
            // Parse lines
            const lines = output.split('\n');
            let contentLines = [];
            let inCode = false;
            for (const l of lines) {
              if (l.match(/^\d+:\s/)) {
                inCode = true;
                contentLines.push(l.replace(/^\d+:\s/, ''));
              } else if (inCode && l.trim() === 'The above content shows the entire, complete file contents of the requested file.') {
                inCode = false;
              }
            }
            if (contentLines.length > 0) {
              files[filePath] = contentLines.join('\n');
            }
          }
        }
      }
    } catch (e) {
      // Ignore parse errors
    }
  }

  for (const [filePath, content] of Object.entries(files)) {
    if (filePath.includes('components\\home\\') || filePath.includes('site-navbar.tsx')) {
      console.log(`Restoring ${filePath}...`);
      fs.writeFileSync(filePath, content, 'utf8');
    }
  }
}

processTranscript().catch(console.error);
