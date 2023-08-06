const byronPoodle = {
    name: "Byron",
    ageInYears: 2,
    warn: function(){
        console.log('Woof Woof Woof')
        console.log(this)
    }
}

// byronPoodle.warn()

const blakeDoodle = {
    name: "Blake",
    breed: "Labradoodle",
    sonicAttack: "ear-rapturing atomic bark",
    mostHatedThing: 'noises in the apartment hallway',
    warn: function(){
        console.log(`${this.name} the ${this.breed} issues an ${this.sonicAttack} when he hears ${this.mostHatedThing}`)
    }
}

// blakeDoodle.warn()

const frog = {name: "Kermit"};
const pig = {name: "Miss Piggy"};

const speak = function(){
    return `It ain't easy being ${this.name}`
}

// Assigning speakfunction as a property to the functions
frog.speak = speak;
pig.speak =speak;

// console.log(frog.speak())
// console.log(pig.speak())

// console.log(frog)


// The Exectution context of Bare Function Calls.
const contextReturner = function(){
    return this
}

// contextReturner() === window;

const locationReturner = function(){
    return this.location.host
}

locationReturner()

function a(){
    return function b(){
        return this
    }
}

class Poodle{
    constructor(name, pronoun){
        this.name = name;
        this.pronoun = pronoun;
        this.sonicAttack = "ear-rupturing atomic bark";
        this.mostHatedThing = "noises in the apartment hallway"
    }
    warn(){
        console.log(`${this.name} issues an ${this.sonicAttack} when ${this.pronoun} hears ${this.mostHatedThing}`)
    }
}

const angela = new Poodle("Angela", "she")
angela.warn()