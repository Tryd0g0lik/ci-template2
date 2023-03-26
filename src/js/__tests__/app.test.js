/* eslint-disable import/extensions */
import { hero, cortedHeroes } from '../app.js';

describe('the La Croix cans on my desk', () => {
  // heroList('test the healtly statuses wich has been equal ==> %s ', (a, b, expected) => {
  //   // The hero's list
  const can1 = cortedHeroes(hero); // The Heroes has been sorted by the health
  const heroList = test.each([

    ['healthy A01', can1[2], { name: 'мечник', health: 10 }],
    ['healthy B01', can1[0], { name: 'маг', health: 100 }],
    ['healthy C01', can1[1], { name: 'лучник', health: 80 }],
  ]);
  heroList('have all the same properties', () => {
    for (const elem in can1) {
      if (!elem === false) {
        expect(elem).toEqual(heroList);
      }
    }
  });
});
// });

