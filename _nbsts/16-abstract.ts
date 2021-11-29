abstract class MortalKombat {
  constructor() {

  }

  move(){}
  fight(){
    console.log(`${this.name} attack with ${this.getSpecialAttack()}`);
  }

  abstract get name(): string
  abstract getSpecialAttack(): string
}

class Subzero extends MortalKombat {
  getSpecialAttack(): string {
    return "HIS SPECIAL ATTACK!!"
  }

  get name(): string{
    return "SUB ZERO"
  }
}

const subzero = new Subzero();

subzero.fight()