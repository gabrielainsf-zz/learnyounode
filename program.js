// learnyounode #2
// let find_sum = (number) => {
//     let sum = 0;
//     for (i = 2; i < number.length; i++) {
//         sum += Number(number[i]);
//     }

//     console.log(sum);
// }

// find_sum(process.argv);

////////////////////////////
// learnyounode #3
// let fs = require('fs');

// let filename = process.argv[2];

// let file = fs.readFileSync(filename);

// let lines = file.toString().split('\n').length - 1;

// console.log(lines);

////////////////////////////
// learnyounode #4
let fs = require('fs');

let filename = process.argv[2];

let file = fs.readFile(filename, function(err, data) {
    if (err) throw err;
    lines = data.toString().split('\n').length - 1;
    console.log(lines);
});

