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

class Mob extends Character {
    constructor() {
        super('Mob');
        this.life = 50;
        this.maxLife = this.life;
        this.attack = 5;
        this.defense = 5;
    }
}

class Boss extends Character {
    constructor() {
        super('Boss');
        this.life = 150;
        this.maxLife = this.life;
        this.attack = 25;
        this.defense = 15;
    }
}

class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
    }

    start() {
        this.update();

        this.fighter1El.querySelector('.attackButtun').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));

        this.fighter2El.querySelector('.attackButtun').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));
    }

    update() {
        //Fighter 1
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life} HP`;
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`;

        //Fighter 2
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life} HP`;
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`;
    }

    doAttack(attacking, attacked) {
        console.log(`${attacking.name} está atacando ${attacked.name}`)
    }
}