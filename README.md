# Discord-phub v1.0.1

The biggest nsfw DB with more than 100 000 images and videos (gif, jpg, png, mp4) of nsfw content with 70+ categories

## Update
- Lot of new categories
- Added lgbt prefix for lbgt categories

## Intallation ?
```js
npm i discord-phub
```

## How to use ?
```js
const { RandomPHUB } = require('discord-phub');

//If you want to generate unique media each time else set it to false (by default it's false)
const nsfw = new RandomPHUB(unique = true);

console.log(nsfw.db); //display all the database
console.log(nsfw.db.all); //display all the links of the databases
console.log(nsfw.categories); //display all the categories
console.log(nsfw.totalElements); //display total elements in database

const pussy = nsfw.getRandomInCategory('pussy'); //will return a link to a pussy media
const rnd = nsfw.getRandom(); //will return a link to any media type of any catagory
const cat = nsfw.getRandomCategory(); //will return a random category

console.log(rnd.type); //show the type of file
console.log(rnd.category); //show the category of the media
console.log(rnd.url); //show the link of the media
```

## File type
- jpeg, jpg, png
- gif
- mp4

## Categories
- 3d-porn
- aesthetic
- amateur
- anal
- asian
- asmr
- ass
- bath-shower
- bdsm
- boobs
- cock
- cosplay
- creampie
- cuckhold
- cumshots
- dilf
- double-penetration
- ebony
- feet
- femdom
- fisting
- food-play
- funny
- furry
- glory-hole
- goth
- hands
- hentai-no-loli
- hentai
- horror
- interracial
- joi
- lactation
- latin
- lgbt-bisexual
- lgbt-femboy
- lgbt-gay
- lgbt-lesbian
- lgbt-transgender
- lgbt-twink
- lingerie
- massage
- mature
- milf
- naked-wrestling
- oral
- orgy
- pegging
- petite
- plus-size
- pornstar
- pov
- public
- pussy
- rimming
- rough
- solo
- squirting
- tattoos-piercings
- tease
- thighs
- threesomes
- toys
- uniform
- vintage
- watersports