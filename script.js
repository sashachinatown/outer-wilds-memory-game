const cardArr = [
    {
        name: "Earth",
        img: 'images/earth.png'
    },
    {
        name: "Atterlock",
        img: 'images/attlerock.png'
    },
    {
        name: "Brittle Hollow",
        img: 'images/brittle-hollow.png'
    },
    {
        name: "Giant's Deep",
        img: 'images/giants_deep.png'
    },
    {
        name: "Dark Bramble",
        img: 'images/dark_bramble.png'
    },
    {
        name: "Quantum Moon",
        img: 'images/quantum_moon.png'
    },
    {
        name: "Earth",
        img: 'images/earth.png'
    },
    {
        name: "Atterlock",
        img: 'images/attlerock.png'
    },
    {
        name: "Brittle Hollow",
        img: 'images/brittle-hollow.png'
    },
    {
        name: "Giant's Deep",
        img: 'images/giants_deep.png'
    },
    {
        name: "Dark Bramble",
        img: 'images/dark_bramble.png'
    },
    {
        name: "Quantum Moon",
        img: 'images/quantum_moon.png'
    }
];

cardArr.sort(() => 0.5 - Math.random());

// console.log(cardArr);

const grid = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenId = [];
const cardsWon = [];


function createBoard() {
    for (let i = 0; i < cardArr.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.setAttribute('style', 'margin-top: 5px; margin-left: 5px');
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    }
}


function checkMatch() {
    const cards = document.querySelectorAll('#grid img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (cardsChosen[0] === cardsChosen[1]) {
        alert("It's a match!");
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
        alert('Sorry, try again!');
    }

    resultDisplay.textContent = cardsWon.length;

    cardsChosen = [];
    cardsChosenId = [];

    if (cardsWon.length === cardArr.length / 2) {
        resultDisplay.textContent = 'Congratulations! You found all the matches!'
    }
}

function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArr[cardId].name);
    cardsChosenId.push(cardId);
    console.log(cardsChosen);

    this.setAttribute('src', cardArr[cardId].img);

    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 1000);
    }
}

createBoard();
