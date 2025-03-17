const fs = require('fs');
const path = require('path');
const frontMatter = require('front-matter');
const siteData = JSON.parse(fs.readFileSync('./data.json', 'utf8'));

// Generate RSS feed
function generateRSS() {
    const baseUrl = siteData.site.url;
    const contentFiles = fs.readdirSync('./content');
    const articles = [];

    // Process all markdown files
    contentFiles.forEach(file => {
        if (path.extname(file) === '.md') {
            const content = fs.readFileSync(`./content/${file}`, 'utf8');
            const parsed = frontMatter(content);
            const slug = path.basename(file, '.md');

            // Extract first paragraph for description
            const firstParagraph = parsed.body.split('\n\n')[0];

            articles.push({
                title: parsed.attributes.title,
                link: `${baseUrl}/blog/${slug}`,
                description: firstParagraph,
                pubDate: new Date(parsed.attributes.published_date).toUTCString(),
                guid: `${baseUrl}/blog/${slug}`,
                author: parsed.attributes.author_name
            });
        }
    });

    // Sort by publication date (newest first)
    articles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

    // Generate RSS XML
    let rss = '<?xml version="1.0" encoding="UTF-8"?>\n';
    rss += '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n';
    rss += '  <channel>\n';
    rss += `    <title>${siteData.site.title}</title>\n`;
    rss += `    <link>${baseUrl}</link>\n`;
    rss += `    <description>${siteData.site.description}</description>\n`;
    rss += `    <language>en-us</language>\n`;
    rss += `    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>\n`;
    rss += `    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />\n`;

    // Add items
    articles.forEach(article => {
        rss += '    <item>\n';
        rss += `      <title>${article.title}</title>\n`;
        rss += `      <link>${article.link}</link>\n`;
        rss += `      <description><![CDATA[${article.description}]]></description>\n`;
        rss += `      <pubDate>${article.pubDate}</pubDate>\n`;
        rss += `      <guid isPermaLink="true">${article.guid}</guid>\n`;
        if (article.author) {
            rss += `      <author>${article.author}</author>\n`;
        }
        rss += '    </item>\n';
    });

    rss += '  </channel>\n';
    rss += '</rss>';

    fs.writeFileSync('./public/rss.xml', rss);
    console.log('RSS feed generated successfully!');
}

generateRSS(); 