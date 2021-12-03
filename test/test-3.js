const { RandomPHUB } = require('../discord-phub');

const nsfw = new RandomPHUB();

console.log(nsfw.categories)
for(let category of nsfw.categories){
    console.log(category, ":", nsfw.db[category].length);
}