/* eslint-disable no-undef */

import Character from '../js/Character.js';

test('first test', () => {
  const char = new Character(1, 20, 20, 50);
  const recever = char.levelUp();
  const expected = {
    level: 2,
    attack: 24,
    defence: 24,
    health: 100,
  };
  expect(recever).toStrictEqual(expected);
  const char1 = new Character(1, 20, 20, 0);
  const receverchar1 = char1.getError();
  const expectedchar1 = console.error();
  expect(receverchar1).toStrictEqual(expectedchar1);
  const char2 = new Character(1, 20, 20, 50);
  expect(char2.damage(30)).toStrictEqual(char2.health = 21.5);
});
