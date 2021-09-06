let modul = require('./nodemodule');
let chars = modul.HowManyWords("Torilla Tavataan");

for (const key in chars) {
    console.log(key+": "+chars[key]);
}
