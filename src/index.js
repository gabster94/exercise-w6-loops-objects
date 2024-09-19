const pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Metapod",
  "Weedle",
  {
    name: 'Pikachu',
    element: 'electricity',
    strength: 55,
    color: 'yellow',
    amountOfLegs: 2
  },
  "Pidgey"
  
];


// 1)
// create a loop that prints all
// the pokemons from the pokemons array
// invoke the function to see that it works
const body = document.getElementById('body')

const allPokemons = () => {
  pokemons.forEach(item => {
    body.innerHTML += `
    <p>${item}</p>
    `
  })
 
}
allPokemons()

// 2)
// Create an object for the pokemon Pikachu.
// it could have properties such as name, element,
// strength, color, amountOfLegs or something like that.

// 3)
// console.log something like
// 'Pikachu is a electricity pokemon with the strength of 32'
// Selecting some of the information about your pikachu object.
pokemons.forEach(item => {
  if (item.name === 'Pikachu'){
    console.log(`${item.name} is an ${item.element} pokemon with the strength of ${item.strength} and is ${item.color} has ${item.amountOfLegs} legs`)
  }
})

// 4)
// Add the property stillToCatch: true to the Pikachu object.
pokemons.forEach(item => {
  if (item.name === 'Pikachu'){
    item.stillToCatch = true
    console.log(`${item.stillToCatch}`)
  }
})

// 5)
// change the value of the key strength in the Pikachu object.
pokemons.forEach(item => {
  if (item.name === 'Pikachu'){
    strength = 'Throwing flowers'
    console.log(`${strength}`)
  }
})

// 6)
// Delete a property from the Pikachu object.

pokemons.forEach(item => {
  if (item.name === 'Pikachu'){
  delete item.color
    console.log(item)
  }
})
// 7)
// Fill up this array with a few more pokemons.
// It is an array with objects!
// I made some suggestions
// but feel free to change as you want.
const moreAboutPokemons = [
  {
    name: "Bulbasaur",
    element: "water",
    strength: 13
  },
  {
    name: "Charmander",
    element: "fire",
    strength: 32
  }
];

moreAboutPokemons.push(
  {
    name: "Eeve",
    element: "wind",
    strength: 34
  },
  {
    name: "Eeve",
    element: "wind",
    strength: 34
  }
  
)
console.log(moreAboutPokemons)
// 8)
// Print out all the NAMES of the pokemons in this new array.

moreAboutPokemons.forEach(pokemon => {
  body.innerHTML += `
  <p>${pokemon.name}</p>
  `
})
// 9)
// Print out something like
// 'Bulbasaur is a water pokemon with the strength of 32'
// Do this for all the pokemons.

moreAboutPokemons.forEach(pokemon => {
  body.innerHTML += `
  <p>${pokemon.name} is a ${pokemon.element} pokemon with the strength of ${pokemon.strength}</p>
  `
})