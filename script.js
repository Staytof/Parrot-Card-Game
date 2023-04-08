//Prompt para numero de cartas

let numCards = parseInt(prompt('Com quantas cartas você quer jogar? (Digite um número par entre 4 e 14)', ''));

while (isNaN(numCards) || numCards % 2 !== 0 || numCards < 4 || numCards > 14) {
    numCards = parseInt(prompt('Número inválido. Com quantas cartas você quer jogar? (Digite um número par entre 4 e 14)', ''));
}

//Array com todas as cartas

const grid = document.querySelector('.grid');
const parrots = [
    'bobrossparrot',
    'explodyparrot',
    'fiestaparrot',
    'metalparrot',
    'revertitparrot',
    'tripletsparrot',
    'unicornparrot'
];

let flippedCards = [];

//Função para criar as cartas no HTML

const createCard = (parrot) => {
    const card = document.createElement('div');
    const front = document.createElement('div');
    const back = document.createElement('div');
    const frontImg = document.createElement('img');
    const backImg = document.createElement('img');

    card.classList.add('card');
    front.classList.add('front-face', 'face');
    back.classList.add('back-face', 'face');
    frontImg.src = `back.png`;
    backImg.src = `${parrot}.gif`;
    frontImg.style.pointerEvents = 'none';

    front.appendChild(frontImg);
    back.appendChild(backImg);
    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', flipCard);

    return card;
};

const checkCardsMatch = () => {
    const [card1, card2] = flippedCards;
    const img1 = card1.querySelector('.back-face img').src;
    const img2 = card2.querySelector('.back-face img').src;

    if (img1 === img2) {
        flippedCards = [];
    } else {
        setTimeout(() => {
            flipBackCards(card1, card2);
        }, 1000);
    }
};

const flipBackCards = (card1, card2) => {
    card1.classList.remove('flipped');
    card2.classList.remove('flipped');
    flippedCards = [];
};

//Função para virar as cartas

const revealCard = (event) => {
    const card = event.currentTarget;
    card.classList.toggle('fliped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        checkCardsMatch();
    }
};

//Função para embaralhar as cartas

const comparador = () => {
    return Math.random() - 0.5;
};

//Função para deixar as cartas viradas

const flipCard = (event) => {
    const card = event.currentTarget;
    if (!card.classList.contains('flipped') && flippedCards.length < 2) {
        card.classList.add('flipped');
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            checkCardsMatch();
        }
    }
};

//Função geral e loadgame();

const loadGame = (numCards) => {
    grid.innerHTML = '';
    flippedCards = [];

    const selectedParrots = parrots.sort(comparador).slice(0, numCards / 2);
    const parrotsDuplicates = [...selectedParrots, ...selectedParrots];
    parrotsDuplicates.sort(comparador).forEach((parrot) => {
        const card = createCard(parrot);
        grid.appendChild(card);
    });
};



loadGame(numCards);