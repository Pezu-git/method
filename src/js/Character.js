/* eslint-disable no-constant-condition */
export default class Character {
  constructor(level, attack, defence, health) {
    this.level = level;
    this.attack = attack;
    this.defence = defence;
    this.health = health;
  }

  // eslint-disable-next-line class-methods-use-this
  levelUp() {
    // eslint-disable-next-line no-cond-assign
    if (this.health > 0) {
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить левел умершего');
    }
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
  }
}
