document.addEventListener("DOMContentLoaded", () => {

const createMonster = document.getElementById('create-monster');
const monsterContainer = document.getElementById('monster-container');


//Create Forms
function createSubmitForm() {
    const form = document.createElement('form')
    form.innerHTML = `
    <form class="add-monster-form">
    <h3>Add a monster!</h3>
    
    <input type="text" name="name" value= "" placeholder="Enter a monster's name:" class="input-text"/>
    
    <input type="text" name="age" value= "" placeholder="Enter a monster's age:" class="input-text"/>
    
    <input type="text" name="description" value="" placeholder="Enter a description:" class="input-text"/>
    
    <input type="submit" name="submit" value="Add Monster" class="submit"/>
    </form>`

    createMonster.appendChild(form)
};
createSubmitForm();

const monsterForm = document.querySelector('form');

monsterForm.addEventListener('submit', (event) => {
    event.preventDefault()
    monsterForm.reset()

    let monsterObj = {
        name: event.target.name.value,
        age: event.target.age.value,
        description: event.target.description.value
    }
});



// function renderMonsters(monsters) {
//     monsters.forEach(monster => {
//         let card = document.createElement('li')
//         card.className = 'card'
//         card.innerHTML = `
        // <div class="card" id="${monster.id}">
        // <h2>${monster.name}</h2>
        // <h3>${monster.age}</h3>
        // <p>${monster.description}</p>
        // </div>    
        // `
        // monsterContainer.appendChild(card)
//     })
// };

function getMonsters() {
     fetch('http://localhost:3000/monsters/?_limit=50')
     .then(resp => resp.json())
     .then(monsters => monsters)
 };

getMonsters()

})




    
