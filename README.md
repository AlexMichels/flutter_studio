# Food Ninja Blog

A scalable, SEO-friendly food blog template.

## Architecture

This blog uses a simple templating system with the following structure:

- `/templates`: HTML templates for the site
- `/content`: Markdown files for blog posts
- `/css`: Stylesheets
- `/js`: JavaScript files
- `/assets`: Images and other media

## Adding a New Article - Step-by-Step Guide

Adding a new article is easy and requires just a few steps:

### 1. Create a Markdown File

Create a new Markdown file in the `/content` folder. Name it with a URL-friendly name:

```
/content/my-delicious-pasta-recipe.md
```

### 2. Add Frontmatter

At the top of your Markdown file, add the required frontmatter between triple dashes:

```markdown
---
title: My Delicious Pasta Recipe
meta_description: Learn how to make the best pasta with this simple 15-minute recipe that will impress your family.
canonical_url: https://foodninja.com/blog/my-delicious-pasta-recipe
og_image: /assets/images/pasta-recipe.png
published_date: Jun 15, 2023
modified_date: Jun 15, 2023
author_name: Your Name
author_image: /assets/images/your-profile.png
author_bio: Food enthusiast and pasta lover based in San Francisco.
category: Recipe
read_time: 5
featured_image: /assets/images/pasta-recipe.png
featured_image_alt: Delicious pasta dish with tomato sauce and basil
has_table_of_contents: true
---
```

### 3. Write Your Article Content

After the frontmatter, write your article content using Markdown:

```markdown
This is my favorite pasta recipe that takes only 15 minutes to prepare!

## Ingredients {#ingredients}

- 250g spaghetti
- 3 tablespoons olive oil
- 2 cloves garlic, minced
- 1 can (400g) crushed tomatoes
- Fresh basil leaves
- Salt and pepper to taste

## Instructions {#instructions}

1. Boil the pasta according to package instructions.
2. Heat the olive oil in a pan and add the garlic.
3. Add the crushed tomatoes and simmer for 5 minutes.
4. Drain the pasta and mix with the sauce.
5. Garnish with fresh basil leaves.

## Tips for Perfect Pasta {#tips}

Always save some pasta water to adjust the consistency of your sauce!
```

### 4. Add Table of Contents Markers

For each section heading that should appear in the table of contents, add an ID using `{#section-id}`:

```markdown
## Ingredients {#ingredients}
## Instructions {#instructions}
## Tips for Perfect Pasta {#tips}
```

### 5. Update data.json

Add your article to the `data.json` file:

1. Open `data.json`
2. Add your article to the `recent_posts` array:

```json
"recent_posts": [
  {
    "title": "My Delicious Pasta Recipe",
    "url": "/blog/my-delicious-pasta-recipe"
  },
  // existing posts...
]
```

3. Add related articles (optional):

```json
"related_articles": {
  "my-delicious-pasta-recipe": [
    {
      "title": "5 Pasta Sauces You Must Try",
      "image": "/assets/images/pasta-sauces.png",
      "excerpt": "Explore these delicious pasta sauce variations to elevate your meals.",
      "url": "/blog/pasta-sauces"
    },
    {
      "title": "Italian Cooking Basics",
      "image": "/assets/images/italian-cooking.png",
      "excerpt": "Learn the fundamental techniques of authentic Italian cuisine.",
      "url": "/blog/italian-cooking-basics"
    }
  ]
}
```

### 6. Add Images

1. Place your article images in the `/assets/images/` folder
2. Reference them in your article using Markdown:

```markdown
![Delicious pasta with tomato sauce](/assets/images/pasta-finished.png)
```

### 7. Build and Test

Run the build command to generate your article:

```bash
npm run build
```

Your article will be available at `https://yourdomain.com/blog/my-delicious-pasta-recipe`.

## Building the Site

This site uses a static site generator to convert the templates and markdown files into HTML. To build the site:

```bash
npm run build
```

## SEO Optimization

Each article includes:
- Meta description
- Open Graph tags
- Twitter Card tags
- Structured data (JSON-LD)
- Semantic HTML structure
- Proper heading hierarchy

## Performance Best Practices

- External CSS and JavaScript
- Lazy loading for images
- Responsive design
- Optimized font loading