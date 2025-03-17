const fs = require('fs');
const path = require('path');
const siteData = JSON.parse(fs.readFileSync('./data.json', 'utf8'));

// Generate sitemap.xml
function generateSitemap() {
  const baseUrl = siteData.site.url;
  const contentFiles = fs.readdirSync('./content');
  
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Add homepage
  sitemap += `  <url>\n    <loc>${baseUrl}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>\n`;
  
  // Add blog index
  sitemap += `  <url>\n    <loc>${baseUrl}/blog</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;
  
  // Add each article
  contentFiles.forEach(file => {
    if (path.extname(file) === '.md') {
      const content = fs.readFileSync(`./content/${file}`, 'utf8');
      const frontMatterRegex = /---\n([\s\S]*?)\n---/;
      const match = content.match(frontMatterRegex);
      
      if (match) {
        const frontMatterText = match[1];
        const modifiedDateMatch = frontMatterText.match(/modified_date: (.*)/);
        const slug = path.basename(file, '.md');
        
        let lastmod = '';
        if (modifiedDateMatch && modifiedDateMatch[1]) {
          // Convert to ISO date format if needed
          lastmod = `\n    <lastmod>${new Date(modifiedDateMatch[1]).toISOString().split('T')[0]}</lastmod>`;
        }
        
        sitemap += `  <url>\n    <loc>${baseUrl}/blog/${slug}</loc>${lastmod}\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
      }
    }
  });
  
  sitemap += '</urlset>';
  
  fs.writeFileSync('./public/sitemap.xml', sitemap);
  console.log('Sitemap generated successfully!');
}

generateSitemap();