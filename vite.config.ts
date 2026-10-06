import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, type Plugin} from 'vite';
import {TOOL_PAGES} from './src/data/toolPages';

function generateRouteHtmlPlugin(): Plugin {
  return {
    name: 'generate-route-html-plugin',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const indexPath = path.join(distDir, 'index.html');
      if (!fs.existsSync(indexPath)) return;

      const baseHtml = fs.readFileSync(indexPath, 'utf-8');

      Object.values(TOOL_PAGES).forEach((tool) => {
        if (tool.path === '/') return;

        const toolCanonical = `https://bulk-url-toolkit-app.socialboostspot.workers.dev${tool.path}`;
        let toolHtml = baseHtml;
        toolHtml = toolHtml.replace(/<title>[\s\S]*?<\/title>/i, () => `<title>${tool.metaTitle}</title>`);
        toolHtml = toolHtml.replace(/<meta[^>]*?name="description"[^>]*?>/i, () => `<meta name="description" content="${tool.metaDescription}" />`);
        toolHtml = toolHtml.replace(/<link[^>]*?rel="canonical"[^>]*?>/i, () => `<link rel="canonical" href="${toolCanonical}" />`);
        toolHtml = toolHtml.replace(/<meta[^>]*?property="og:title"[^>]*?>/i, () => `<meta property="og:title" content="${tool.metaTitle}" />`);
        toolHtml = toolHtml.replace(/<meta[^>]*?property="og:description"[^>]*?>/i, () => `<meta property="og:description" content="${tool.metaDescription}" />`);
        toolHtml = toolHtml.replace(/<meta[^>]*?property="og:url"[^>]*?>/i, () => `<meta property="og:url" content="${toolCanonical}" />`);
        toolHtml = toolHtml.replace(/<meta[^>]*?name="twitter:title"[^>]*?>/i, () => `<meta name="twitter:title" content="${tool.metaTitle}" />`);
        toolHtml = toolHtml.replace(/<meta[^>]*?name="twitter:description"[^>]*?>/i, () => `<meta name="twitter:description" content="${tool.metaDescription}" />`);

        const routeSubdir = path.join(distDir, tool.path.replace(/^\//, ''));
        if (!fs.existsSync(routeSubdir)) {
          fs.mkdirSync(routeSubdir, { recursive: true });
        }
        fs.writeFileSync(path.join(routeSubdir, 'index.html'), toolHtml, 'utf-8');
        fs.writeFileSync(`${routeSubdir}.html`, toolHtml, 'utf-8');
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), generateRouteHtmlPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
