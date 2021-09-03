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

// let volvo = new Car('Volvo','V50','FKY-222');
// //console.log(volvo.cruise.speed);
// volvo.showData();
// volvo.IncreaseBy5();
// volvo.Increase(10);
// volvo.showData(); 

class RaceCar extends Car{
    constructor(model,brand, registration,year){
        super(model,brand,registration);
        this.year = year;
    }

    showData(){
        super.showData();
        console.log(this.year);
    }

}

let formula = new RaceCar('F1','Ferrari','FFF-000',2007);
//formula.showData();

// let num = 6;
// function square(n){
//     return n*n;
// }
// console.log(square(num));
// console.log(num);

let a = {
    foo:'bar',
    x:5,
    y:7,
    z:13
}

function shallowCopy(source){
    return Object.assign({},source);
}

let copied = shallowCopy(a);
copied.foo = 'HAHAHHAAA! This is copy!';
console.log(a);
console.log(copied);
console.log(a==copied);
// function exercise(p){
//     p.result = p.foo+p.bar;
// }
// exercise(a);
// console.log(a.result);

function greetingsToYou(name){
    function seasonSelector(type){
        switch(type){
            case "New Year":
                console.log("Happy new year "+name);
                break;
            case "Day":
                console.log("Have a nice day "+name);
                break;
            default:
                console.log("That's not valid season. You tried "+type);
        }
    }
    return seasonSelector;
}

greeter = greetingsToYou("Juho");
greeter();
greeter("Day");
greeter("New Year");
