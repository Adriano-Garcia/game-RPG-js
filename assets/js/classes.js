//Warrior ou Wizard
//Mob ou Boss

class Character {

    _life = 10;
    maxLife = 10;
    attack = 1;
    defense = 1;

    constructor(name) {
        this.name = name;
    }

    get life() {
        return this._life;
    }

    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife;
    }
}

class Warrior extends Character {
    constructor(name) {
        super(name);
        this.life = 100;
        this.maxLife = this.life;
        this.attack = 15;
        this.defense = 10
    }
}

class Wizard extends Character {
    constructor(name) {
        super(name);
        this.life = 80;
        this.maxLife = this.life;
        this.attack = 20;
        this.defense = 8
    }
}