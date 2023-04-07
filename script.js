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

    card.addEventListener('click', revealCard);

    return card;
};

//Função para virar as cartas

const revealCard = (event) => {
    const card = event.target;
    const frontFace = card.querySelector('.front-face');
    const backFace = card.querySelector('.back-face');
    const frontImg = frontFace.querySelector('img');
    const backImg = backFace.querySelector('img');

    frontFace.style.pointerEvents = 'auto';
    backFace.style.pointerEvents = 'auto';

    frontImg.src = backImg.src;
    backImg.src = frontImg.src;
};


//Função para embaralhar as cartas

const comparador = () => {
    return Math.random() - 0.5;
};

const flipCard = (event) => {
    const card = event.currentTarget;
    card.classList.add('flipped');
};

const loadGame = (numCards) => {
    grid.innerHTML = '';

    const selectedParrots = parrots.sort(comparador).slice(0, numCards / 2);
    const parrotsDuplicates = [...selectedParrots, ...selectedParrots];
    parrotsDuplicates.sort(comparador).forEach((parrot) => {
        const card = createCard(parrot);
        card.addEventListener('click', flipCard);
        card.addEventListener('click', (event) => {
            setTimeout(() => {
                flipCard(event);
            }, 1000);
        });
        grid.appendChild(card);
    });
};

loadGame(numCards);