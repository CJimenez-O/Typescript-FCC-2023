"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
// Datatypes
let fname;
fname = "chris";
// only give you fucntions for strings
fname.toLocaleLowerCase();
// fname = 10; this produces an error
let age = "25";
let dob;
// console.log(dob) give error since dob is used before assigned | will be undefined since variable has not been given a value
dob = parseInt(age);
// console.log(dob);
// ------ Array
let arr = ["test", "test"];
let arr2 = [1, 2, 3, 4];
let results = arr2.filter((x) => x < 2);
let c = 1 /* Color.Blue */;
// ----- tuple
// Tuple can contain two values of different data types.
// [date : string, price : number]
let swapNum;
function swapNumber(num1, num2) {
    return [num2, num1];
}
swapNum = swapNumber(10, 20);
// swapNum[3] // gives error in typescript since only space for 2 elements was created
// console.log(swapNum[0])
// ---- any
let department;
department = 25;
department = "hello";
// ==== FUNCTIONS ======
// name function
//                                         optional ?:
function add(num1, num2, num3) {
    // if num3 exist all 3 numbers else add 2
    let sum = num3 ? num1 + num2 + num3 : num1 + num2;
    return sum; // will return error if no number is returned unless void type is used
}
// arrow function
const sub = (num1, num2) => {
    let sub = num1 - num2;
    return sub; // will return error if no number is returned unless void type is used
};
// function expression
const mult = function (num1, num2) {
    let mult = num1 * num2;
    return mult; // will return error if no number is returned unless void type is used
};
// rest parameters
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let arrFuncNum = [1, 2, 3, 5];
// console.log(`rest param: ${add2(1,2,3,4,5,6,7,8)}`)
// generic function
function getItems(items) {
    return new Array().concat(items);
}
let concatNum = getItems([1, 2, 3, 4, 5, 6]);
let concatStr = getItems(["a", "b", "c", "d"]);
// ===== CLASSES =====
class Employee {
    constructor(id, name, address) {
        // private #
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    getName() {
        return this.name;
    }
    getID() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
}
_Employee_id = new WeakMap();
let john = new Employee(1, "john", "2134");
// console.log(john.getID())
// console.log(john.id); gives error since id is private
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
}
let mike = new Manager(2, "Mike", "950");
console.log(mike.getName());
let { name: username, email: userLogin, age: userAge, id: userId, } = { name: "Chris", age: 25, id: 1, email: "yahoo.com" };
let [user1, user2] = [
    {
        name: "C",
        age: 25,
    },
    {
        name: "D",
        age: 25,
    },
    {
        name: "A",
        age: 25,
    },
];
console.log(user1);
let branch = { address: "950", name: "Ontario" };
// console.log(branch)
// ----------------------------------------------
