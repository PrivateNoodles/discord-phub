const fs = require('fs');
const path = require('path');

const dbDirectory = path.resolve(__dirname, "../db");
const newDbDirectory = path.resolve(__dirname, "./list");


fs.readdirSync(dbDirectory).forEach(file => {
    const medias = require(dbDirectory + "/" + file);

    let save = medias.join('\n');

    fs.writeFileSync(newDbDirectory + "/" + file + ".txt", save);
});