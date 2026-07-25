const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const directoryPath = path.join(__dirname, 'public');

async function optimizeImages() {
    const files = fs.readdirSync(directoryPath);
    for (const file of files) {
        if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
            const filePath = path.join(directoryPath, file);
            const ext = path.extname(file);
            const basename = path.basename(file, ext);
            const webpPath = path.join(directoryPath, `${basename}.webp`);
            
            console.log(`Optimizing ${file}...`);
            await sharp(filePath)
                .resize({ width: 1920, withoutEnlargement: true })
                .webp({ quality: 80 })
                .toFile(webpPath);
            
            // Delete original
            fs.unlinkSync(filePath);
            console.log(`Converted ${file} to ${basename}.webp and deleted original.`);
        }
    }
}

optimizeImages().catch(console.error);
