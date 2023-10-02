console.log("----- Variables -----");

//  Var
function looping() {
    for (var j = 0; j < 5; j++) {
        console.log(j);
    }
}
looping();
console.log(j);

//  Let
for (let k = 0; k < 5; k++) {
    console.log(k);
}
console.log(k);

//  Let
for (let l = 0; l < 5; l++) {
    console.log(l);
}
if (true) {
    let l = 100;
    console.log("l =",l);
}

//  Const 
const phi = 3.14;
phi = 3.147;
console.log(phi);