const { RandomPHUB } = require('../discord-phub');

const nsfw = new RandomPHUB();

console.log("Media nb: " + nsfw.db['lgbt-transgender'].length);

(() => { 
    let take = [], nb = 0; 
    for(let i=0; i<10; i++) { 
        const e = nsfw.getRandomInCategory('lgbt-transgender'); 
        if(take.includes(e.url)) nb++; 
        take.push(e.url); 
    }
    console.log(nb);
})();