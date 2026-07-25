const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.ts') || file.endsWith('.tsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk(directoryPath);
let filesModified = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    content = content.replace(/\.png/g, '.webp');
    content = content.replace(/\.jpg/g, '.webp');
    content = content.replace(/\.jpeg/g, '.webp');

    // Add loading="lazy" to <img> tags in .tsx files (except for Hero or important ones)
    if (file.endsWith('.tsx')) {
        // We will just do a simple replacement if it doesn't have loading="lazy" yet
        // However, we shouldn't make hero images lazy.
        // For simplicity, we can regex replace <img to add loading="lazy" if not present
        // I will do this manually for components to be safe.
    }

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        filesModified++;
        console.log('Modified:', file);
    }
});

console.log(`Done. Modified ${filesModified} files.`);
