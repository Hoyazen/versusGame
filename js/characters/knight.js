class Knight extends Character {

    constructor(name, type) {

        super(name, 120, type);

        const attack1 = new Attack(1, "Shield Bash", 8);
        const attack2 = new Attack(2, "Steel Slash", 12);
        const attack3 = new Attack(3, "Lance Charge", 10);

        this.attacks = [];
        this.attacks.push(attack1);
        this.attacks.push(attack2);
        this.attacks.push(attack3);
    }
}