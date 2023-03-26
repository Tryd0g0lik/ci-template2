export const hero = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

// eslint-disable-next-line consistent-return
export function cortedHeroes(h) {
  try {
    if (!!h.length > 0) {
      hero.sort((a, b) => {
        if (a.health > b.health) {
          return -1;
        }
        if (a.health < b.health) {
          return 1;
        }

        return 0;
      });

      return h;
    }
    return h;
  } catch (e) {
    console.log(e.message);
  }
}
