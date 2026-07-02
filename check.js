const fs = require('fs');
const readline = require('readline');

async function processTranscript() {
  const transcriptPath = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\d6fef9b8-34a1-4ddd-a913-4d79a5ac33ac\\.system_generated\\logs\\transcript.jsonl';
  const fileStream = fs.createReadStream(transcriptPath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let count = 0;
  for await (const line of rl) {
    if (line.includes('view_file')) {
      const entry = JSON.parse(line);
      console.log(JSON.stringify(entry, null, 2));
      count++;
      if (count > 2) break;
    }
  }
}

processTranscript().catch(console.error);
