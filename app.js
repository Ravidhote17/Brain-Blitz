let cardsArray = [
    {
        'name': 'coke',
        'img': 'assets/coke.png'
    },
    {
        'name': 'gym',
        'img': 'assets/gym1.jpg'
    },
    {
        'name': 'shoe',
        'img': 'assets/shoe.jpg'
    },
    {
        'name': 'duo',
        'img': 'assets/duo.png'
    },
    {
        'name': 'song',
        'img': 'assets/shoe.jpg'
    },
    {
        'name': 'docker',
        'img': 'assets/docker.png'
    }
];

const parentDiv = document.querySelector('#card-section');


const gameCard = cardsArray.concat(cardsArray)
console.log(gameCard)

const myNumbers = (array) => {
    for (let i = array.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
}

const shuffledChild = myNumbers(gameCard)

let clickCount = 0;
let firstCard = "";
let secondCard = "";

const card_matches = () => {
    let card_selected = document.querySelectorAll('.card_selected');
    card_selected.forEach((curElem) => {
        curElem.classList.add('card_match')
    })
}

parentDiv.addEventListener('click', (event) => {
    let curCard = event.target;
    clickCount ++;

    if(clickCount<3){
        if(clickCount === 1){
            firstCard = curCard.dataset.name;
            curCard.classList.add('card_selected');
        }else{
            secondCard = curCard.dataset.name;
            curCard.classList.add('card_selected');
        }

        if(firstCard !== "" && secondCard !== ""){
            if(firstCard === secondCard){
                // curCard.classList.add('card_match')
                card_matches()
                
            }
        }

    }

    if(curCard.id === "card-section"){return false}
})

for(i=0; i<shuffledChild.length; i++){
    const childDiv = document.createElement('div')
    childDiv.classList.add('card')
    childDiv.dataset.name = shuffledChild[i].name;
    childDiv.style.backgroundImage = `url(${shuffledChild[i].img})`;
    
    parentDiv.appendChild(childDiv)
}