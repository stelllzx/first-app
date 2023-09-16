let jsonData = require ('./person.json');
console.log(jsonData);


const fs = require ('fs');
let student = {
    name: 'stella',
    age: 23,
    gender: 'Female',
    deparment :' Med & Surgrey',
    car : 'honda'
};

let data = JSON.stringify(student, null , 2);
fs.writeFileSync('person.json' , data, function (err){
    if (err) throw err;
    console.log ('Data written to file');
});
