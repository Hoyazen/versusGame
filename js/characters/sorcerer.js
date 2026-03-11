class Sorcerer extends Character {

    constructor(name, type) {

        super(name, 100, type);

        const attack4 = new Attack(4, "Fire Bolt", 15);
        const attack5 = new Attack(5, "Ice Shard", 13);
        const attack6 = new Attack(6, "Arcane Blast", 16);

        this.attacks = [];
        this.attacks.push(attack4);
        this.attacks.push(attack5);
        this.attacks.push(attack6);
    }
}