// generate-pages-json.js
import fs from 'fs';
import path from 'path';
const dist = 'dist';
const getFiles = (dir) => {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    let fileList = [];
    files.forEach(file => {
        const filePath = path.join(dir, file.name);
        if (filePath.includes("sw.js") || filePath.includes("webmanifest.json")) {
            console.log(filePath + "-" + "skipped");
        } else {
            if (file.isDirectory()) {
                fileList = fileList.concat(getFiles(filePath));
            } else {
                fileList.push(filePath);
            }
        }
    });
    return fileList;
};
const assetsJson = () => {
    const pagesDir = path.join("./", dist);
    const files = getFiles(pagesDir);
    const pages = files.map(file => {
        const relativePath = path.relative(pagesDir, file);
        const pagePath = relativePath.replace(/\/index\.html/, '');
        return pagePath;
    });
    const assetsJson = JSON.stringify(pages, null, 2);
    // Save the pages JSON to a file
    fs.writeFileSync('./dist/assets.json', assetsJson);
};
assetsJson();
