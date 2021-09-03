let car = new Object();
car.manifacturer = "Volvo";
car.model = "V60";
car.year = 2016;

let car2 ={
    manifacturer: "BMWE",
    model: "Bi6",
    year: 2021
};

// let cars = [car,car2];

// cars.forEach(c => {
//     console.log("Manifacturer: "+c.manifacturer);
//     console.log("Model: "+c.model);
//     console.log("year: "+c.year);
// });

for (const key in car) {
    console.log(car[key]);
}