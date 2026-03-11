class Character {
    /**
     * Constructor of all the characters
     * @param {*} name Name of the character
     * @param {*} hp Number of life for the character
     * @param {*} type Type of the character (fire, wind, water...)
     */
    constructor(name, hp, type) {
        this.name = name;
        this.hp = hp;
        this.type = type;
    }

    //Damage deal to the enemy character if win
    takingDamages(damages) {
        this.hp = this.hp - damages;

        if (this.hp < 0) {
            this.hp = 0;
        }
    }
    
    //If the character's hp goes under 0 he dies
    isAlive() {
        return this.hp > 0;
    }

    //Damage bonus between types (fire>plant; water>fire...)
    weaknessType(enemy) {
        if (this.type === "FIRE" && enemy.type === "PLANT") {
            return 5;
        } else if (this.type === "PLANT" && enemy.type === "WATER") {
            return 5;
        } else if (this.type === "WATER" && enemy.type === "FIRE") {
            return 5;
        } else {
            return 0;
        }
    }

    attack(enemy, attackUsed) {
        const damages = attackUsed.power + this.weaknessType(enemy);
        enemy.takingDamages(damages);
    }
}