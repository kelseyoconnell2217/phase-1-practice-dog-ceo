console.log('%c HI', 'color: firebrick')

function getAnimalPics(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((resp) => resp.json())
    .then(fetchPics)
}

function fetchPics(data){
    data['message'].forEach(element => {
        let card = document.createElement('li');
        card.className = 'card'
        card.innerHTML = `<img src="${element}"width = 300px>
        `
        let cardContainer = document.querySelector('#dog-image-container')
        cardContainer.appendChild(card);
    })  
        

}

function getBreedNames()
    {fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json())
    .then(fetchBreeds)
}
let breedsList = document.getElementById("dog-breeds")
function fetchBreeds(data2){
    let dogs = data2['message']
    for(key in dogs){
        let newString = capFirstLetters(key)
        
        let line = document.createElement('li');
        line.innerHTML = `${newString}` 
        let firstLetter = newString[0].toLowerCase()
        line.className = `${firstLetter}`
        breedsList.appendChild(line)
    }
}

function initialize(){
    getAnimalPics()
    getBreedNames()
    const dropdown = document.getElementById('breed-dropdown')
    dropdown.addEventListener('click', startFilter)
}
document.addEventListener('DOMContentLoaded', initialize())

function capFirstLetters(string){
    let words = string.split(' ')
    let capWords = words.map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);})
     return capWords.join(" ");
    }

breedsList.addEventListener('click', turnBlue)
breedsList.addEventListener('pointerover', changeToHand)
breedsList.addEventListener('pointerout', changeToArrow)

function turnBlue(e){
    e.target.style.color = "#ADD8E6"
}
function changeToHand(e){
    e.target.style.cursor = 'pointer'
}
function changeToArrow(e){
    e.target.style.cursor = ''}





function startFilter(){
    const dropdown = document.getElementById('breed-dropdown')
    dropdown.addEventListener('click', filterInput)
}
let selectedLetter
function filterInput(e){
    selectedLetter = e.target.value
    const breeds = document.querySelectorAll('#dog-breeds li')
    if(selectedLetter === 'all' || selectedLetter === ''){
        breeds.forEach((breed) => {
            breed.style.display = ''
        }) 
    } else {
        for(element of breeds){
            if(element.className !== `${selectedLetter}`) {
                element.style.display = 'none'
            } else {element.style.display = ''}
        }
    } 

}


