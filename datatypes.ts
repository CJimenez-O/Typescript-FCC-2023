// Datatypes
let fname: string;
fname = "chris";
// only give you fucntions for strings
fname.toLocaleLowerCase();
// fname = 10; this produces an error

let age: string = "25";
let dob: number;

// console.log(dob) give error since dob is used before assigned | will be undefined since variable has not been given a value
dob = parseInt(age);
// console.log(dob);

// ------ Array
let arr: string[] = ["test", "test"];
let arr2: Array<number> = [1, 2, 3, 4];

let results = arr2.filter((x) => x < 2);
// console.log(results) //[1]

// throws error becuase .find gives numer and undefined. result is expecting number[]
// results = arr2.find( x => x == 1 )
// results.forEach( x => console.log(x + 1));

// ----- enum -- purpose?
// enums allow us to declare a set of named constants i.e. a collection of related values that can be numeric or string values.

const enum Color {
  Red,
  Blue,
  Green,
}

let c: Color = Color.Blue;

// ----- tuple
// Tuple can contain two values of different data types.
// [date : string, price : number]
let swapNum: [firstNumber: number, secondNumber: number];

function swapNumber(num1: number, num2: number): [number, number] {
  return [num2, num1];
}

swapNum = swapNumber(10, 20);
// swapNum[3] // gives error in typescript since only space for 2 elements was created
// console.log(swapNum[0])

// ---- any

let department: any;
department = 25;
department = "hello";

// ==== FUNCTIONS ======

// name function
//                                         optional ?:
function add(num1: number, num2: number, num3?: number): number {
  // if num3 exist all 3 numbers else add 2
  let sum = num3 ? num1 + num2 + num3 : num1 + num2;
  return sum; // will return error if no number is returned unless void type is used
}

// arrow function
const sub = (num1: number, num2: number): number => {
  let sub = num1 - num2;
  return sub; // will return error if no number is returned unless void type is used
};

// function expression
const mult = function (num1: number, num2: number): number {
  let mult = num1 * num2;
  return mult; // will return error if no number is returned unless void type is used
};

// rest parameters
function add2(num1: number, num2: number, ...num3: number[]): number {
  return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}

let arrFuncNum = [1, 2, 3, 5];

// console.log(`rest param: ${add2(1,2,3,4,5,6,7,8)}`)

// generic function

function getItems<Type>(items: Type[]): Type[] {
  return new Array<Type>().concat(items);
}

let concatNum = getItems<number>([1, 2, 3, 4, 5, 6]);

let concatStr = getItems(["a", "b", "c", "d"]);

// ===== CLASSES =====

class Employee {
  // private #
  #id: number;
  protected name: string;
  address: string;

  constructor(id: number, name: string, address: string) {
    this.#id = id;
    this.name = name;
    this.address = address;
  }

  getName(): string {
    return this.name;
  }
  getID(): number {
    return this.#id;
  }
}

let john = new Employee(1, "john", "2134");
// console.log(john.getID())
// console.log(john.id); gives error since id is private

class Manager extends Employee {
  constructor(id: number, name: string, address: string) {
    super(id, name, address);
  }
}

let mike = new Manager(2, "Mike", "950");
console.log(mike.getName());

// ===== INTERFACES =====
// user defined Datatype
interface User {
  name: string;
  age?: number;
  id?: number;
  email?: string;
  // can make property optional
}

let {
  name: username,
  email: userLogin,
  age: userAge,
  id: userId,
}: User = { name: "Chris", age: 25, id: 1, email: "yahoo.com" };
// console.log(username);

interface Login {
  Login(): User;
}

let [user1, user2]: User[] = [
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

console.log(user1)

// ------ Displaying extends example --------

interface Branch extends User {
  address: string;
}

let branch: Branch = { address: "950", name: "Ontario" };
// console.log(branch)

// ----------------------------------------------

// ========= Decorators =========


