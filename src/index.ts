let id: number = 5;
let company: string = "string";
let isPublished: boolean = true;
let x: any = "hello";

let ids: number[] = [1, 2, 3, 4];

console.log("id:", id);

//Touple
let person: [number, string, boolean];
person = [1, "usman", true];

//touple array
let employee: [number, string][];
employee = [
  [1, "usman"],
  [2, "usman"],
  [3, "usman"],
];

//Union

let pid: string | number;
pid = 22; //and also accept string

//Enum
export enum Direction1 {
  up = 4,
  down,
}
console.log(Direction1.up);

//onjects
type User = {
  id: number;
  name: string;
};
const user: User = {
  id: 1,
  name: "edee",
};

//type acceleration
let cid: any = 1;
// let customerId = <number>cid
let customerId = cid as number;

//functions
const sum = (a: number, b: number): number => {
  return a + b;
};
// console.log(sum(6, 9));

const log = (message: number | string): void => {
  console.log(message);
};
log("hello");

//interfaces
interface userInterface {
  id: number;
  name: string;
}
const user1: userInterface = {
  id: 1,
  name: "jhsjadh",
};

interface matchFunc {
  (x: number, y: number): number;
}

const add: matchFunc = (x: number, y: number): number => x + y;

//classes
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}
class Person implements PersonInterface {
  id: number;
  name: string;
  constructor(id: number, name: string) {
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
  position: string;
  constructor(id: number, name: string, position: string) {
    super(id, name), (this.position = position);
  }
}

const emp = new Employee(3, "gill", "developer");

// console.log(emp.register());

//Generics

const getArray = <T>(items: T[]): T[] => {
  return new Array().concat(items);
};

let numArray = getArray<number>([1, 3, 4]);
let strArray = getArray<string>(["a", "b", "c"]);

numArray.push(1);
console.log(strArray);
