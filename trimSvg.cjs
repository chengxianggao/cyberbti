const fs = require('fs');
const { parseSync, stringify } = require('svgson');
const pathBounds = require('svg-path-bounds');

function parseNode(node, bounds) {
  if (node.name === 'path' && node.attributes.d) {
    try {
      const [l, t, r, b] = pathBounds(node.attributes.d);
      bounds.left = Math.min(bounds.left, l);
      bounds.top = Math.min(bounds.top, t);
      bounds.right = Math.max(bounds.right, r);
      bounds.bottom = Math.max(bounds.bottom, b);
    } catch(e) {}
  } else if (node.name === 'circle') {
    const cx = parseFloat(node.attributes.cx || 0);
    const cy = parseFloat(node.attributes.cy || 0);
    const r = parseFloat(node.attributes.r || 0);
    bounds.left = Math.min(bounds.left, cx - r);
    bounds.top = Math.min(bounds.top, cy - r);
    bounds.right = Math.max(bounds.right, cx + r);
    bounds.bottom = Math.max(bounds.bottom, cy + r);
  } else if (node.name === 'rect') {
    const x = parseFloat(node.attributes.x || 0);
    const y = parseFloat(node.attributes.y || 0);
    const width = parseFloat(node.attributes.width || 0);
    const height = parseFloat(node.attributes.height || 0);
    bounds.left = Math.min(bounds.left, x);
    bounds.top = Math.min(bounds.top, y);
    bounds.right = Math.max(bounds.right, x + width);
    bounds.bottom = Math.max(bounds.bottom, y + height);
  }

  // Handle transformations on nodes? This might be complicated if there are transforms.
  // For now assume absolute coordinates or minimal transforms that bounding box captures.
  
  if (node.children) {
    node.children.forEach(c => parseNode(c, bounds));
  }
}

const dir = 'public/images';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.svg'));

files.forEach(f => {
  const p = dir + '/' + f;
  const c = fs.readFileSync(p, 'utf-8');
  let ast;
  try {
    ast = parseSync(c);
  } catch(e) {
    console.log("Error parsing", f);
    return;
  }
  
  const bounds = { left: Infinity, top: Infinity, right: -Infinity, bottom: -Infinity };
  parseNode(ast, bounds);
  
  if (bounds.left < Infinity) {
    const width = bounds.right - bounds.left;
    const height = bounds.bottom - bounds.top;
    
    // Add 5% padding
    const px = width * 0.05;
    const py = height * 0.05;
    
    const newViewBox = `${bounds.left - px} ${bounds.top - py} ${width + px*2} ${height + py*2}`;
    ast.attributes.viewBox = newViewBox;
    // remove hardcoded width/height to make it scale to viewBox
    delete ast.attributes.width;
    delete ast.attributes.height;
    
    fs.writeFileSync(p, stringify(ast));
    console.log("Updated", f, "viewBox to", newViewBox);
  } else {
    console.log("No paths found in", f);
  }
});
