const fs = require('fs');
const path = require('path');

const dbDirectory = path.resolve(__dirname, "./db");
const db = {};

//importing images
fs.readdirSync(dbDirectory).forEach(file => {
    const fileName = file.replace('.json', '');
    db[fileName] = require(dbDirectory + "/" + file);
});

class NSFWElement{
    constructor(url, category){
        this.url = url;
        this.category = category;
        this.type = url.replace(/.+?\.([^.]+?)$/gi, "$1");
    }
}

class RandomPHUB{
    constructor(unique = false){
        this.unique = unique;
        this.picked = {};

        this.db = db;
        this.categories = Object.keys(db);
        this.totalElements = this.categories.reduce((previous, current) => {
            return previous + db[current].length;
        }, 0);

        //Already picked up
        this.categories.forEach((category) => {
            this.picked[category] = [];
        });

        //all database
        this.db.all = this.categories.reduce((previous, current) => {
            return previous.concat(db[current]);
        }, []);
    }

    _randomize(obj){
        return obj[~~(Math.random() * obj.length)];
    }

    getRandomInCategory(category = "all"){
        const nsfw = this.db[category];

        let result = new NSFWElement(this._randomize(nsfw), category);

        if(this.unique){
            const limit = 500;
            let count = 0;

            while(this.picked[category].includes(result.url) && count < limit){
                result = new NSFWElement(this._randomize(nsfw), category);
                count++;
            }
            this.picked[category].push(result.url);

            if(this.db[category].length == this.picked[category].length) this.picked[category] = [];
        }

        return result;
    }

    getRandom(){
        const categories = JSON.parse(JSON.stringify(this.categories));
        categories.splice(this.categories.indexOf('all'), 1);

        return this.getRandomInCategory(this._randomize(categories));
    }
}

module.exports = { RandomPHUB };