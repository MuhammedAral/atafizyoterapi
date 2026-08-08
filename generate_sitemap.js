const fs = require('fs');
const path = require('path');

const baseUrl = 'https://atafizyoterapi.com';
const directory = './hastaliklar';

let urls = [];

// Add main pages
urls.push(`${baseUrl}/index.html`);
urls.push(`${baseUrl}/hastaliklar/index.html`);

// Read hastaliklar directory
const files = fs.readdirSync(directory);
files.forEach(file => {
    if (file.endsWith('.html') && file !== 'index.html') {
        urls.push(`${baseUrl}/hastaliklar/${file}`);
    }
});

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

const date = new Date().toISOString().split('T')[0];

urls.forEach(url => {
    let priority = '0.8';
    if (url.endsWith('/index.html') && !url.includes('hastaliklar')) {
        priority = '1.0';
    } else if (url.endsWith('hastaliklar/index.html')) {
        priority = '0.9';
    }

    sitemap += `  <url>
    <loc>${url}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>
`;
});

sitemap += `</urlset>`;

fs.writeFileSync('sitemap.xml', sitemap);
console.log(`Generated sitemap.xml with ${urls.length} URLs.`);
