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
    constructor(fighter1, fighter2, fighter1El, fighter2El, logObject) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
        this.log = logObject;
    }

    start() {
        this.update();

        this.fighter1El.querySelector('.attackButtun').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2));

        this.fighter2El.querySelector('.attackButtun').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1));
    }

    update() {
        //Fighter 1
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`;
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`;

        //Fighter 2
        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`;
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`;
    }

    doAttack(attacking, attacked) {
        if (attacking.life <= 0) {
            this.log.addMessage('Você está morto e não pode atacar no momento');
            return;
        } else if (attacked.life <= 0) {
            this.log.addMessage('Seu oponente está morto e não pode ser atacado');
            return;
        }

        let attackFactor = (Math.random() * 2).toFixed(2);
        let defenseFactor = (Math.random() * 2).toFixed(2);

        let actualAttack = attacking.attack * attackFactor;
        let actualDefense = attacked.defense * defenseFactor;

        if (actualAttack > actualDefense) {
            attacked.life -= actualAttack;
            this.log.addMessage(`${attacking.name} causou ${actualAttack} de dano em ${attacked.name}`);
        } else {
            this.log.addMessage(`${attacked.name} conseguiu defender..`);
        }

        this.update();
    }
}

class Log {
    list = [];

    constructor(listEl) {
        this.listEl = listEl;
    }

    addMessage(msg) {
        this.list.push(msg);
        this.render();
    }

    render() {
        this.listEl.innerHTML = '';

        for (let i in this.list) {
            this.listEl.innerHTML += `<li>${this.list[i]}</li>`;
        }
    }
}