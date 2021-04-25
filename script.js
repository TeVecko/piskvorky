'use strict';

let kdoJeNaTahu = 'circle';

const hraje = document.querySelector('.kolecko');

document.querySelectorAll('.policko').forEach((policko) => {
  policko.addEventListener('click', (event) => {
    if (kdoJeNaTahu === 'circle') {
      policko.className += ' policko--circle';
      hraje.src = 'Obrazky/cross.svg';
      kdoJeNaTahu = 'cross';
      policko.disabled = 'true';
    } else if (kdoJeNaTahu === 'cross') {
      policko.className += ' policko--cross';
      hraje.src = 'Obrazky/circle.svg';
      kdoJeNaTahu = 'circle';
      policko.disabled = 'true';
    } else {
    }
    isWinningMove(policko);
    console.log(isWinningMove(policko));
  });
});

/* Pro dané políčko vrátí objekt s číslem řádku a sloupce. */
const velikostPole = 10; // 10x10
const fields = document.querySelectorAll('.policko');

const getPosition = (policko) => {
  let fieldIndex = 0;
  while (fieldIndex < fields.length) {
    if (policko === fields[fieldIndex]) {
      break;
    }
    fieldIndex++;
  }
  return {
    row: Math.floor(fieldIndex / velikostPole),
    column: fieldIndex % velikostPole,
  };
};

console.log(getPosition(fields[99]));

/* Pro číslo řádku a sloupce vrátí příslušný prvek. */
const getField = (row, column) => fields[row * velikostPole + column];

console.log(getField(1, 1));

/* Pro políčko s křížkem vrátí řetězec 'cross', pro kroužek 'circle' a pro neobsazené políčko hodnotu undefined. */
const getSymbol = (policko) => {
  if (policko.classList.contains('policko--cross')) {
    return 'cross';
  } else if (policko.classList.contains('policko--circle')) {
    return 'circle';
  }
};

console.log(getSymbol(fields[3]));

/* Vyskakovací okno.  */
const text = () => {
  if (kdoJeNaTahu === 'circle') {
    const confirmation = confirm('Vyhrál hráč s křížky. Spustit novou hru?');
    if (confirmation) {
      location.reload();
    } else {
      location = 'index.html';
    }
  } else {
    const confirmation = confirm('Vyhrál hráč s kolečky. Spustit novou hru?');
    if (confirmation) {
      location.reload();
    } else {
      location = 'index.html';
    }
  }
};

/* Funkce se podívá na symbol políčka a zjistí, jestli jich je v řádku nebo ve sloupci sousedících pět. Podle toho vrátí true nebo false. */
const symbolsToWin = 5;
const isWinningMove = (policko) => {
  const origin = getPosition(policko);
  const symbol = getSymbol(policko);

  let i;

  let inRow = 1; // Jednička pro právě vybrané políčko
  // Koukni doleva
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  // Koukni doprava
  i = origin.column;
  while (
    i < velikostPole - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return true + text();
  }

  let inColumn = 1;
  // Koukni nahoru
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  // Koukni dolu
  i = origin.row;
  while (
    i < velikostPole - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    return true + text();
  }

  return false;
};
