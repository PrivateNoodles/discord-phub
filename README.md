# Discord-phub v1.0.7

Nsfw DB with more than 5 000 images and videos (gif, jpg, png, mp4) of nsfw content with 65+ categories

## Update

- Fixed over 500 broken link
- Fixed some bugs and infinites loop

## Intallation ?
```js
npm i discord-phub
```

## In the browser ?

```html
<script type="text/javascript" src="./discord-phub.browser.js"></script>
```

## How to use ?
```js
const { RandomPHUB } = require('discord-phub'); //if you are on nodejs

//If you want to generate unique media each time else set it to false (by default it's false)
const nsfw = new RandomPHUB(unique = true);

console.log(nsfw.db); //display all the database
console.log(nsfw.db.all); //display all the links of the databases
console.log(nsfw.categories); //display all the categories
console.log(nsfw.type); //display all the type
console.log(nsfw.totalElements); //display total elements in database
console.log(nsfw.typesByCategorie) //display all available type by categories

const verify = nsfw.verifyTypeInCategory("gif", "pussy"); //verify if a type is available in a categorie
const pussy = nsfw.getRandomInCategory('pussy', "gif"); //will return a link to a pussy gif
const pussy2 = nsfw.getRandomInCategory('pussy'); //will return a link to a pussy media 
const rnd = nsfw.getRandom("gif"); //will return a link to a random media of any categorie with gif type
const rnd2 = nsfw.getRandom(); //will return a link to a random media of any categorie with any type
const cat = nsfw.getRandomCategory(); //will return a random category
const type = nsfw.getRandomType(); //will return a random type

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