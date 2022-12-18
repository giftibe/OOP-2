/* Modeling the Animal kingdom class. Apply all four principles of OOP. */

class Animals {
    #names;
    constructor(){ 
        if(this.constructor === Animals){
            throw new Error("This class cannot be instantiated becasue it's a base class")
        }
        this.withBackBone
        this.withoutBackBone 
        this.coldblooded
        this.warmblooded 
        this.#names = [];
    }


        inputCreatures(...name){                                             //Abstraction
        if(!isNaN(name)){
            console.log("Enter a string");
        }
        else{
                                                                            //Encapsulation of 'names'
            this.#names.push(...name)                                          
            return this.#names
        }
    }

    seeNames(){
        console.log(this.#names);
    }

    keyFeature(){}                                  //Polymorphism
}

class Anthropoda extends Animals{                       //Inheritance
    constructor(){
        super()
        this.withoutBackBone = true
        this.coldblooded = true
    }

    keyFeature(){
        console.log(`Their body is segmented`);                 //Polymorphism implemented
    }
}



class Fish extends Animals{
    constructor(){
        super()
        this.withBackBone = true
    }
    keyFeature(){
        console.log(`They do not maintain a constant internal body temperature `);
    }

}


class Amphibia extends Animals{
    constructor(){
        super()
        this.withBackBone = true
    }
    keyFeature(){
        console.log(`They can breathe air through their skin`);
    }
}



class Reptiles extends Animals{
    constructor(){
        super()
        this.withBackBone = true
        this.coldblooded = true
    }
    keyFeature(){
        console.log(`They cannot  generate their internal heat`);
    }
}



class Aves extends Animals{
    constructor(){
        super()
        this.withBackBone = true
        this.warmblooded = true
    }
    keyFeature(){
        console.log(`They poosess feathers`);
    }
}



class Mammals extends Animals{
    constructor(){
        super()
        this.withBackBone = true
        this.warmblooded = true
    }
    keyFeature(){
        console.log(`They can generate their internal heat`);
    }
}