const fs = require('fs');
const path = require('path');

const dbDirectory = path.resolve(__dirname, "../db");
const newDbDirectory = path.resolve(__dirname, "./db");
const db = {};

const alreayPicked = [];

fs.readdirSync(dbDirectory).forEach(file => {
    const medias = require(dbDirectory + "/" + file);

    const save = [];

    medias.forEach((media) => {
        if(!alreayPicked.includes(media)) save.push(media);
        alreayPicked.push(media);
    });

    fs.writeFileSync(newDbDirectory + "/" + file, JSON.stringify(save));
});
