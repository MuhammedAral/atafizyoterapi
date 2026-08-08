const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            // skip node_modules or git
            if (!file.includes('.git')) {
                results = results.concat(walk(file));
            }
        } else { 
            if(file.endsWith('.html')) results.push(file);
        }
    });
    return results;
}

const htmlFiles = walk('./');

let count = 0;
htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes('styles.css"')) {
        content = content.replace(/styles\.css"/g, 'styles.css?v=2"');
        fs.writeFileSync(file, content);
        count++;
    } else if (content.includes('styles.css?v=1"')) {
        content = content.replace(/styles\.css\?v=1"/g, 'styles.css?v=2"');
        fs.writeFileSync(file, content);
        count++;
    }
});

console.log(`Updated ${count} HTML files with cache buster.`);
