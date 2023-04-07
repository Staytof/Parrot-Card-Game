let numCards = parseInt(prompt('Com quantas cartas você quer jogar? (Digite um número par entre 4 e 14)', ''));

while (isNaN(numCards) || numCards % 2 !== 0 || numCards < 4 || numCards > 14) {
    numCards = parseInt(prompt('Número inválido. Com quantas cartas você quer jogar? (Digite um número par entre 4 e 14)', ''));
}

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

    return card;
};

const comparador = () => {
    return Math.random() - 0.5;
};

const loadGame = (numCards) => {

    grid.innerHTML = '';

    const selectedParrots = parrots.sort(comparador).slice(0, numCards / 2);
    const parrotsDuplicates = [...selectedParrots, ...selectedParrots];
    parrotsDuplicates.sort(comparador).forEach((parrot) => {
        const card = createCard(parrot);
        grid.appendChild(card);
    });
};

loadGame(numCards);