import fs from 'fs';

const content = fs.readFileSync('src/data/personalities.ts', 'utf-8');

const mapping = {
  "CURSE": "SUCKER", 
  "IRON": "JIAN",    
  "REBEL": "BADEGG", 
  "PURE": "PURE",    
  "FAKE": "BAOGUO",  
  "PRESS": "BASG",   
  "RAW": "WCNM",     
  "THINK": "THINK",  
  "GOOD": "GOOD",    
  "CHAD": "+HAO",    
  "WOLF": "WOLF",    
  "IKUN": "JNTM",    
  "HOMELANDER": "BABY", 
  "NAILONG": "FOOL", 
  "TAO": "HHHH",     
  "CHENZE": "LAOTIE", 
  "YUJIE": "DAIPAI", 
};

let newContent = content;
for (const [id, newEnglishId] of Object.entries(mapping)) {
  const regex = new RegExp(`"id":\\s*"${id}",\\s*"englishId":\\s*"[^"]+"`, 'g');
  newContent = newContent.replace(regex, `"id": "${id}",\n    "englishId": "${newEnglishId}"`);
}

fs.writeFileSync('src/data/personalities.ts', newContent);
console.log('Updated englishIds');
