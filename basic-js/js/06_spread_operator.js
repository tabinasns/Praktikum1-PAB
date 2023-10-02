console.log("----- Spread Operator -----");

// Array
let arr1 = [10, 20, 30];
let arr2 = [100, 200, 300];

// Without Spread Operator
let arr3 = [arr1, arr2];
console.log(arr3);

// With spread operator
let arr4 = [...arr1,...arr2];
console.log(arr4);

// With spread operator
let arr5 = [...arr1, 40, 50];
console.log(arr5);

// With spread operator
let arr6 = [30, 40, 50, ...arr1];
console.log(arr6);

// Object 
let employee = {
    name: 'Budi',
    age: 22,
    position: "Software Engineer"
};

// without spread operator
let employee1 = {
    employee,
    age: 25,
    city: "Jakarta"
};
console.log(employee1);

// with spread operator 
let employee2 = {
    ...employee,
    age: 20,
    city: "Surabaya"
};
console.log(employee2);