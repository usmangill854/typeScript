"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direction1 = void 0;
let id = 5;
let company = "string";
let isPublished = true;
let x = "hello";
let ids = [1, 2, 3, 4];
console.log("id:", id);
//Touple
let person;
person = [1, "usman", true];
//touple array
let employee;
employee = [
    [1, "usman"],
    [2, "usman"],
    [3, "usman"],
];
//Union
let pid;
pid = 22; //and also accept string
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 4] = "up";
    Direction1[Direction1["down"] = 5] = "down";
})(Direction1 = exports.Direction1 || (exports.Direction1 = {}));
console.log(Direction1.up);
const user = {
    id: 1,
    name: "edee",
};
//type acceleration
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
//functions
const sum = (a, b) => {
    return a + b;
};
// console.log(sum(6, 9));
const log = (message) => {
    console.log(message);
};
log("hello");
const user1 = {
    id: 1,
    name: "jhsjadh",
};
const add = (x, y) => x + y;
class Person {
    constructor(id, name) {
        (this.id = id), (this.name = name);
    }
    register() {
        return `${this.name} is registed`;
    }
}
const usman = new Person(1, "erer");
const furqan = new Person(1, "4334");
// console.log(usman, furqan);
// console.log(usman.register());
//sub class
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name), (this.position = position);
    }
}
const emp = new Employee(3, "gill", "developer");
// console.log(emp.register());
//Generics
const getArray = (items) => {
    return new Array().concat(items);
};
let numArray = getArray([1, 3, 4]);
let strArray = getArray(["a", "b", "c"]);
numArray.push(1);
console.log(strArray);
