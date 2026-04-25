import express from "express";
import path from "path";

const app = express();
const PORT = 3001;

// Production serving
const distPath = path.join(process.cwd(), 'dist');
app.use(express.static(distPath));
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Test prod server running on port ${PORT}`);
});
