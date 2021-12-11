const urlStatusCode = require('./lib/index.js');
const fs = require('fs');
const path = require('path');

const dbDirectory = path.resolve(__dirname, "../db");
const newDbDirectory = path.resolve(__dirname, "./db-check");

let errors = 0;
let urlDone = 0;

function displayError(res){
    errors++;
    console.log("[ERROR]", res.url, res, "Errors: " + errors, "Done: " + urlDone);
}

const alreadyDone = [];

fs.readdirSync(newDbDirectory).forEach(e => alreadyDone.push(e));

fs.readdirSync(dbDirectory).forEach(async (file) => {
    if(alreadyDone.includes(file)) {
        console.log("[ALREADY DONE] " + file);
        return;
    }

    const medias = require(dbDirectory + "/" + file);

    const save = [];

    for(const media of medias){
        try{
            const res = await urlStatusCode(media);

            if(res.status == 200) {

                urlDone++;
                save.push(res.url);

            } else { displayError(res); }

        } catch(e){ displayError(e) }
    }

    fs.writeFileSync(newDbDirectory + "/" + file, JSON.stringify(save));
});