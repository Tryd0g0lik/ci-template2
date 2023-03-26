"use strict";

const hero = [{
  name: 'мечник',
  health: 10
}, {
  name: 'маг',
  health: 100
}, {
  name: 'лучник',
  health: 80
}];
try {
  if (!!hero && hero.length > 0) {
    hero.sort((a, b) => {
      if (a.health > b.health) {
        return 1;
      }
      if (a.health < b.health) {
        return -1;
      }
      return 0;
    });
    console.log(hero);
  }
} catch (e) {
  console.log(e.message);
}