import fs from 'fs';

const content = fs.readFileSync('src/data/personalities.ts', 'utf-8');

const prefixMatch = content.match(/export const personalities: Personality\[\] = \[([\s\S]*?)\];/);

if (!prefixMatch) {
  console.log("Could not find personalities array");
  process.exit(1);
}

const listStr = prefixMatch[1];
const blocks = [];
let currentBlock = [];
let bracketLevel = 0;

const lines = listStr.split('\n');
for (const line of lines) {
  if (line.trim() === '') continue;
  currentBlock.push(line);
  if (line.includes('{')) bracketLevel += (line.match(/\{/g) || []).length;
  if (line.includes('}')) bracketLevel -= (line.match(/\}/g) || []).length;
  
  if (bracketLevel === 0 && line.trim().startsWith('}')) {
    blocks.push(currentBlock.join('\n'));
    currentBlock = [];
  }
}

const order = ['WOLF', 'GOOD', 'THINK', 'RAW', 'PURE', 'IKUN', 'CHAD'];
const orderedBlocks = new Array(order.length).fill(null);
const remainingBlocks = [];

blocks.forEach(block => {
  const match = block.match(/"id":\s*"([^"]+)"/);
  if (match) {
    const id = match[1];
    const index = order.indexOf(id);
    if (index !== -1) {
      orderedBlocks[index] = block;
    } else {
      remainingBlocks.push(block);
    }
  }
});

// Randomize remaining ones
for (let i = remainingBlocks.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [remainingBlocks[i], remainingBlocks[j]] = [remainingBlocks[j], remainingBlocks[i]];
}

const finalItems = [...orderedBlocks.filter(b => b !== null), ...remainingBlocks];
const cleanup = finalItems.map(b => b.trim().replace(/,$/, '')).join(',\n  ');

const newContent = content.replace(
  /export const personalities: Personality\[\] = \[[\s\S]*?\];/, 
  `export const personalities: Personality[] = [\n  ${cleanup}\n];`
);

fs.writeFileSync('src/data/personalities.ts', newContent);
console.log("Reordered properly");
