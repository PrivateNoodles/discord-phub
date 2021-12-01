const { RandomPHUB } = require('../discord-phub');

const unique = new RandomPHUB(true);
const notunique = new RandomPHUB();

console.log('--- [UNIQUE] ---');

for(let i=0; i<5; i++){
    console.log("Rimming: ", unique.getRandomInCategory('rimming'));
}
for(let i=0; i<5; i++){
    console.log("Random: ", unique.getRandom());
}

console.log("--- [NOT UNIQUE] ---");

for(let i=0; i<5; i++){
    console.log("Toys: ", notunique.getRandomInCategory('toys'));
}
for(let i=0; i<5; i++){
    console.log("Random: ", notunique.getRandom());
}

for(let category of unique.categories){
    console.log(`- ${category}`);
}

console.log(unique.totalElements, unique.categories.length);