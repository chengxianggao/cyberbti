import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Add explicit MIME type handling to prevent fallback to octet-stream
  express.static.mime.define({
    'application/javascript': ['js', 'mjs', 'cjs', 'ts', 'tsx', 'jsx'],
    'text/css': ['css'],
    'image/png': ['png'],
    'image/jpeg': ['jpg', 'jpeg'],
    'image/svg+xml': ['svg'],
    'image/webp': ['webp'],
    'image/gif': ['gif'],
    'audio/mpeg': ['mp3'],
    'audio/wav': ['wav']
  });

  // Ignore favicon requests to prevent SPA routing issues
  app.get('/favicon.ico', (req, res) => res.status(204).end());

  // Proxy route for Gemini API using pure HTTP REST
  app.post("/api/gemini", express.json(), async (req, res) => {
    try {
      const { prompt } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;
      
      if (!apiKey) {
        return res.status(500).json({ error: "GEMINI_API_KEY is missing in environment." });
      }

      // Use the official HTTP API per user request
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
              temperature: 0.9,
            }
          }),
        }
      );

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error?.message || "Failed to fetch from Gemini API");
      }

      const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
      res.json({ text });
    } catch (error) {
      console.error("Gemini API Error:", error);
      res.status(500).json({ error: error instanceof Error ? error.message : "Unknown error occurred" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production serving
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
