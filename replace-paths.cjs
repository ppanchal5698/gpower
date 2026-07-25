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

    // Replace <img src="/image.png" ... /> in .tsx files
    if (file.endsWith('.tsx')) {
        content = content.replace(/src="\/([^"]+\.(png|jpg|jpeg|svg|gif|webp))"/g, 'src={`\${import.meta.env.BASE_URL}$1`}');
    }

    // Replace image: '/image.png' in .ts and .tsx files
    content = content.replace(/image:\s*'\/([^']+\.(png|jpg|jpeg|svg|gif|webp))'/g, 'image: `\${import.meta.env.BASE_URL}$1`');

    // Replace '...' : '/image.png' for caseStudyImages record
    content = content.replace(/'([^']+)'\s*:\s*'\/([^']+\.(png|jpg|jpeg|svg|gif|webp))'/g, "'$1': `\${import.meta.env.BASE_URL}$2`");


    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        filesModified++;
        console.log('Modified:', file);
    }
});

console.log(`Done. Modified ${filesModified} files.`);
