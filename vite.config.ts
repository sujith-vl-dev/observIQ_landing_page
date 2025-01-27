import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from 'fs';
import type { ViteDevServer } from 'vite';
import type { IncomingMessage, ServerResponse } from 'http';
import type { Connect } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    {
      name: 'store-email',
      configureServer(server: ViteDevServer) {
        server.middlewares.use(async (req: IncomingMessage, res: ServerResponse, next: Connect.NextFunction) => {
          if (req.url === '/api/store-email' && req.method === 'POST') {
            let body = '';
            req.on('data', chunk => {
              body += chunk;
            });

            req.on('end', () => {
              const { email } = JSON.parse(body);
              const filePath = path.join(__dirname, 'emails.txt');
              
              fs.appendFile(filePath, `${new Date().toISOString()}: ${email}\n`, (err) => {
                if (err) {
                  res.statusCode = 500;
                  res.end(JSON.stringify({ error: 'Failed to store email' }));
                  return;
                }
                res.end(JSON.stringify({ message: 'Email stored successfully' }));
              });
            });
          } else {
            next();
          }
        });
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
