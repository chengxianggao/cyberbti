import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function processImages() {
  const dir = path.resolve('public/images');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));

  for (const file of files) {
    const filePath = path.join(dir, file);
    try {
      console.log(`Processing ${file}...`);
      
      const image = sharp(filePath);
      
      // Trim away completely transparent pixels
      const { data, info } = await image
        .trim({ threshold: 0 }) // 0 means only completely transparent
        .toBuffer({ resolveWithObject: true });
        
      console.log(`Trimmed ${file} from original size to ${info.width}x${info.height}`);
      
      // We can also resize or pad if necessary, but simply trimming to bounding box 
      // ensures that CSS object-contain will scale them all uniformly relative to their bounds!
      
      // Overwrite the original file
      await sharp(data).toFile(filePath);
      console.log(`Saved ${file}`);
      
    } catch (err) {
      console.error(`Error processing ${file}:`, err);
    }
  }
}

processImages();
