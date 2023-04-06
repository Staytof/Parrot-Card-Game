const grid = document.querySelector('.grid')

const parrots = [
    'bobrossparrot',
    'explodyparrot',
    'fiestaparrot',
    'metalparrot',
    'revertitparrot',
    'tripletsparrot',
    'unicornparrot'
];

const createCard = (parrots) => {
    const card = document.createElement('div');
    const front = document.createElement('div');
    const back = document.createElement('div');
    const frontImg = document.createElement('img');
    const backImg = document.createElement('img');

    card.classList.add('card');
    front.classList.add('front-face', 'face');
    back.classList.add('back-face', 'face');
    frontImg.src = `back.png`;
    backImg.src = `${parrots}.gif`;
    frontImg.style.pointerEvents = 'none';

    front.appendChild(frontImg);
    back.appendChild(backImg);
    card.appendChild(front);
    card.appendChild(back);


    return card;

    
}

parrots.sort(comparador);

function comparador() {
    return Math.random() - 0.5;
}

const loadGame = () => {

    const parrotsDuplicates = [
        ...parrots, ...parrots
    ];

    parrotsDuplicates.forEach((parrots) => {
        const card = createCard(parrots);
        grid.appendChild(card);
    });
}

loadGame();
