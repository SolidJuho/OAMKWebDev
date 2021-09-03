function Animal(type,speed,isCute,sound){
    this.type = type;
    this.speed = speed;
    this.isCure = isCute;
    this.createdAt = new Date();
    this.makeSound = function(){
        console.log(sound);
        return sound;
    }
}

let alligator = new Animal('Alligator', 2,false,'Grrrr!');
let cat = new Animal('Cat', 5,true,'Meow!');

// console.log(alligator.makeSound());

let fruit = {
    healthy: false,
    isHealthy: function(){
        // console.log("Checking if healthy.");
        return this.healthy;
    }
}

// console.log(fruit.isHealthy());

class Car{
    constructor(brand, model, registration){
        this.brand = brand;
        this.model = model;
        this.registration = registration;
        this.cruise = new CruiseControl(15);
    }

    showData(){
        console.log(this.brand+" "+this.model+" "+this.registration+" "+this.cruise.speed);
    }
    IncreaseBy5 = function(){
        this.cruise.speed +=5;
    }
    Increase = function(amount){
        this.cruise.speed +=amount;
    }
}

function CruiseControl(speed=50){
    this.speed = speed;
}

let volvo = new Car('Volvo','V50','FKY-222');
//console.log(volvo.cruise.speed);
volvo.showData();
volvo.IncreaseBy5();
volvo.Increase(10);
volvo.showData(); 

class RaceCar extends Car{
    
}