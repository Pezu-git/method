/* eslint-disable no-undef */

import Character from '../js/Character.js';

test('levelUp test', () => {
  const char = new Character(1, 20, 20, 50);
  char.levelUp();
  const expected = new Character(2, 24, 24, 100);
  expect(char).toEqual(expected);
});
test('dead char test', () => {
  function deadCharacter(l, a, d, h) {
    // eslint-disable-next-line no-new
    new Character(l, a, d, h).levelUp();
  }
  expect(() => {
    deadCharacter(1, 20, 20, 0);
  }).toThrow('Нельзя повысить левел умершего');
});
test('damage test', () => {
  const char = new Character(1, 20, 20, 50);
  char.damage(30);
  const expected = new Character(1, 20, 20, 26);
  expect(char).toEqual(expected);
});
