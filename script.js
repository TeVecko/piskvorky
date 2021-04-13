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
  });
});

/* Možná se bude hodit. */
// let hraciPole = [
//   ['', '', '', '', '', '', '', '', '', ''],
//   ['', '', '', '', '', '', '', '', '', ''],
//   ['', '', '', '', '', '', '', '', '', ''],
//   ['', '', '', '', '', '', '', '', '', ''],
//   ['', '', '', '', '', '', '', '', '', ''],
//   ['', '', '', '', '', '', '', '', '', ''],
//   ['', '', '', '', '', '', '', '', '', ''],
//   ['', '', '', '', '', '', '', '', '', ''],
//   ['', '', '', '', '', '', '', '', '', ''],
//   ['', '', '', '', '', '', '', '', '', ''],
// ];

// for (let i = 0; i < policko.length; i += 1) {

//     }
