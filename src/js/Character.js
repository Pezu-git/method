/* eslint-disable no-constant-condition */
export default class Character {
  constructor(level, attack, defence, health) {
    this.level = level;
    this.attack = attack;
    this.defence = defence;
    this.health = health;
    if (this.health <= 0) {
      const newLocal = 'Dead';
      this.getError(newLocal);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  getError(message) {
    try {
      throw new Error(message);
    } catch {
      console.error(message);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  levelUp() {
    this.level += 1;
    this.attack += this.attack * 0.2;
    this.defence += this.defence * 0.2;
    this.health = 100;
    return {
      level: this.level,
      attack: this.attack,
      defence: this.defence,
      health: this.health,
    };
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
  }
}
