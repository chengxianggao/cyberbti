import mime from "mime";
console.log(typeof mime.lookup === 'function' ? mime.lookup("index-xyz.js") : mime.getType("index-xyz.js"));
