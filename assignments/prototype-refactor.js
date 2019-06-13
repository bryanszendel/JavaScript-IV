/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// GameObject
class GameObject {
    constructor(attributes) {
        this.name = attributes.name;
        this.createdAt = attributes.createdAt;
        this.dimensions = attributes.dimensions;
    }

    destroy() {
        return `${this.name} was removed from the game.`;
    }
  }
    
// CharacterStats
class CharacterStats extends GameObject {
    constructor(charAttributes) {
        super(charAttributes);
        this.healthPoints = charAttributes.healthPoints;
    }

    takeDamage() {
        return `${this.name} took damage.`;
    }
  }
  
// Humanoid
class Humanoid extends CharacterStats {
    constructor(humAttributes) {
    super(humAttributes);
    this.team = humAttributes.team;
    this.weapons = humAttributes.weapons;
    this.language = humAttributes.language;
    }

    greet() {
        return `${this.name} offers a greeting in ${this.language}.`;
    }
  }
  
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
  // Hero
class Hero extends Humanoid {
    constructor(heroAttributes) {
    super(heroAttributes);
    this.name = heroAttributes.name;
    this.weapons = heroAttributes.weapons;
    }  

    slap(target) {
        target.healthPoints = target.healthPoints - 10;
        console.log(`${target.name} @ ${target.healthPoints} HP`);
        return `${this.name} just slapped you with great force.`;
    }

    powerSit() {
        return `You are suffocating because ${this.name} just sat on you.`;
    }

    revival() {
        return `Death was close, but revival occurred for ${this.name}.`;
    }

    victoryDance() {
        return `${this.name} wins!!!`;
    }

    gotHurt() {
        return this.healthPoints - 20;
    }

    death(target) {
        if (this.healthPoints === 0) {
            return this.destroy();
          } else {
            return `${target.name} is not quite dead yet.`;
          }      
    }
}
  
  
  // Villain
class Villain extends Humanoid {
    constructor(villAttributes) {
        super(villAttributes);
        this.name = villAttributes.name;
        this.weapons = villAttributes.weapons;    
    }

    block() {
        return `Whatever happened didn't happen because ${this.name} blocked it.`;
    }

    attack(weapon1, weapon2) {
        return `${this.name} is coming at you with ${this.weapons[weapon1]} and ${this.weapons[weapon2]}.`;
    }

    tearGas(weapon) {
        return `${this.name} dropped ${this.weapons[weapon]} in the air vents; now you are crying.`;
    }

    standOff() {
        return `${this.name} enters the room to take you down.`;
    }

    reallyHurt() {
        return this.healthPoints - (this.healthPoints * 0.9);
    }

    death(target) {
        if (this.healthPoints <= 0) {
            return this.destroy();
          } else {
            return `${target.name} is not quite dead yet.`;
          }
    }
  }
  
    
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1
    },
    healthPoints: 5,
    name: "Bruce",
    team: "Mage Guild",
    weapons: ["Staff of Shamalama"],
    language: "Common Tongue"
  });
  
  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2
    },
    healthPoints: 15,
    name: "Sir Mustachio",
    team: "The Round Table",
    weapons: ["Giant Sword", "Shield"],
    language: "Common Tongue"
  });
  
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4
    },
    healthPoints: 10,
    name: "Lilith",
    team: "Forest Kingdom",
    weapons: ["Bow", "Dagger"],
    language: "Elvish"
  });
  
  const johnny = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 3,
      width: 3,
      height: 4
    },
    healthPoints: 150,
    name: "Johnny Cash",
    team: "His Own Team",
    weapons: ["determination", "powerful words"],
    language: "Good Country English"
  });
  
  const depression = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 10,
      width: 10,
      height: 10
    },
    healthPoints: 150,
    name: "Depression",
    team: "Team Taking Over",
    weapons: ["whisky", "isolation"],
    language: "the language of destroyed dreams"
  });
  
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  // Stretch task:
  // COMPLETE * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // COMPLETE * Create two new objects, one a villain and one a hero and fight it out with methods!
  
  console.log(johnny.createdAt);
  console.log(johnny.greet());
  console.log(depression.standOff());
  console.log(johnny.slap(depression));
  console.log(depression.attack(0, 1));
  console.log(depression.tearGas(0));
  console.log(johnny.gotHurt());
  console.log(johnny.healthPoints);
  console.log(depression.tearGas(1));
  console.log(johnny.slap(depression));
  console.log(depression.block());
  console.log(johnny.revival());
  console.log(johnny.powerSit());
  console.log(johnny.slap(depression));
  console.log(johnny.slap(depression));
  console.log(johnny.slap(depression));
  console.log(johnny.slap(depression));
  console.log(depression.takeDamage(), depression.reallyHurt());
  console.log(johnny.slap(depression));
  console.log(depression.death(depression));
  console.log(johnny.slap(depression));
  console.log(johnny.slap(depression));
  console.log(johnny.slap(depression));
  console.log(johnny.slap(depression));
  console.log(johnny.slap(depression));
  console.log(johnny.slap(depression));
  console.log(depression.death(depression));
  console.log(johnny.slap(depression));
  console.log(johnny.slap(depression));
  console.log(depression.death(depression));
  console.log(johnny.victoryDance());  