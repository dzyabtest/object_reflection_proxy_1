/* eslint-disable linebreak-style */
import showStats from './js/basic';

const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

console.log(showStats(obj, ['name', 'level']));
