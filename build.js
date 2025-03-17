const fs = require('fs');
const path = require('path');
const marked = require('marked');
const handlebars = require('handlebars');
const frontMatter = require('front-matter');
const mkdirp = require('mkdirp');

// Register partials
handlebars.registerPartial('header', fs.readFileSync('./templates/header.html', 'utf8'));
handlebars.registerPartial('footer', fs.readFileSync('./templates/footer.html', 'utf8'));
handlebars.registerPartial('sidebar', fs.readFileSync('./templates/sidebar.html', 'utf8'));

// Load templates
const articleTemplate = handlebars.compile(fs.readFileSync('./templates/article.html', 'utf8'));

// Load data
const siteData = JSON.parse(fs.readFileSync('./data.json', 'utf8'));

// Create output directory
mkdirp.sync('./public/blog');

// Process all markdown files in content directory
const contentFiles = fs.readdirSync('./content');
contentFiles.forEach(file => {
  if (path.extname(file) === '.md') {
    const content = fs.readFileSync(`./content/${file}`, 'utf8');
    const parsed = frontMatter(content);
    const slug = path.basename(file, '.md');
    
    // Convert markdown to HTML
    const articleContent = marked.parse(parsed.body);
    
    // Process table of contents
    const tocItems = [];
    if (parsed.attributes.has_table_of_contents) {
      const headingRegex = /## (.*?) {#(.*?)}/g;
      let match;
      let number = 1;
      
      while ((match = headingRegex.exec(parsed.body)) !== null) {
        tocItems.push({
          title: match[1],
          id: match[2],
          number: number++
        });
      }
    }
    
    // Prepare data for template
    const templateData = {
      ...parsed.attributes,
      article_content: articleContent,
      toc_items: tocItems,
      popular_posts: siteData.popular_posts,
      recent_posts: siteData.recent_posts,
      related_articles: siteData.related_articles[slug] || []
    };
    
    // Render HTML
    const html = articleTemplate(templateData);
    
    // Write to file
    fs.writeFileSync(`./public/blog/${slug}.html`, html);
    console.log(`Generated: ${slug}.html`);
  }
});

// Copy assets
console.log('Build complete!');