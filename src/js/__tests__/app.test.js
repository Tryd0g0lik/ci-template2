/* eslint-disable import/extensions */
import { hero, cortedHeroes } from '../app.js';


const heroList = test.each([

  ['healthy A01', { name: 'мечник', health: 10 }, 'wounded'],
  ['healthy B01', { name: 'маг', health: 100 }, 'healthy'],
  ['healthy C01', { name: 'лучник', health: 80 }, 'healthy'],
]);

heroList('test the healtly statuses wich has been equal ==> %s ', (a, b, expected) => {
  // The hero's list
  const can1 = cortedHeroes(hero); // The Heroes has been sorted by the health

  describe('the La Croix cans on my desk', () => {
    test('have all the same properties', () => {
      expect(can1).toEqual(expected);
    });

    test('are not the exact same can', () => {
      expect(can1).not.toBe(expected);
    });
  });
});

