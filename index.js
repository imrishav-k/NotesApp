// var a = 6;

// var obj = {
//     a:5,
//     func1: function() {
//         // console.log(this);
//         console.log(this.a);
//     }
// }

// var foo = obj.func1;
// foo();

// function foo(){
//     console.log(this.a);
// }

// var obj = {
//     a:2,
//     foo:foo
// };

// var bar = obj.foo;
// bar();


//////////////////////////////////////////////

// function Pet(name) {
//     name = name;
//     this.getName = () => this.name;
// }
//   const cat = new Pet('Fluffy');
//   console.log(cat.getName()); // What is logged?
//   const { getName } = cat;
//   console.log(getName()); 

// const object = {
//     message: 'Hello, World!',
//     logMessage() {
//       console.log(this.message); // What is logged?
//     }
//   };
// setTimeout(function (){object.logMessage();}, 1000);
// object.logMessage();
/////////////////////////////////////////////////////////////
// const object = {
//     message: 'Hello, World!'
// };
// function logMessage() {
//     console.log(this.message); // "Hello, World!"
// }
// logMessage.call(object);
// logMessage.apply(object);
// var b = logMessage.bind(object);
// b();
//////////////////////////////////////////////////////////////
// logMessage.call(object);
// who = 'worldGlobal';
// const object = {
//     // obj: {
//     //     who: 'WorldInner',
//     //     farewell: () => {
//     //         return `Goodbye, ${this.who}!`;
//     //     }
//     // },
//     who: 'WorldOuter',
//     greet() {
//       return `Hello, ${this.who}!`;
//     },
//     farewell: () => {
//       return `Goodbye, ${this.who}!`;
//     }
// };
// console.log(object.greet());    // What is logged?
// console.log(object.farewell());



////////////////////////////////////////////////

// this.message = 'Hello, World Global';
// const object = {
//     message: 'Hello, World!',
//     logMessage() {
//         console.log(this.message);
//     }
// };
// setTimeout(object.logMessage.bind(this), 0);

///////////////////////////////////////////
// const animalMethods = {
//     eat(amount) {
//       console.log(`${this.name} is eating.`)
//       this.energy += amount
//     },
//     sleep(length) {
//       console.log(`${this.name} is sleeping.`)
//       this.energy += length
//     },
//     play(length) {
//       console.log(`${this.name} is playing.`)
//       this.energy -= length
//     }
//   }
  
//   function Animal (name, energy) {
//     let animal = Object.create(animalMethods)
//     animal.name = name
//     animal.energy = energy
  
//     return animal
//   }
  
//   const leo = Animal('Leo', 7)
//   const snoop = Animal('Snoop', 10)


//   function C(p1, p2){
//     this.p1 = p1;
//     this.p2 = p2;
//     this.fun = function(){console.log("prototype");}
//   }

//   var obj = new C("1", "2");
// //   C.prototype.fun = function(){
// //     console.log("prototype");
// //   }
//   console.log(obj);
// obj.fun();

// function f(){
//     {
//         {
//             let x = 5;
//         }
//     }
// }
// f();
// let x=7;
// console.log(x);

// var x;
// console.log(x)
// x =10;

function A(a1, a2){
    this.a1 = a1;
    this.a2 = a2;
}

A.prototype.fun = function(){
    console.log("prototype wala fun");
}

var objB = Object.create(A);

var objA = new A(5, 8);
var objA2 = new A(5, 8);
// console.log(objA2.a1);
// console.log(objA);
// objA.fun = function(){
//     console.log("object wala fun");
// };

// console.log(Object.getPrototypeOf(objA).fun.toString());

// objA.fun();
// objA2.fun();

// objA2.__proto__.fun2 = "value";


// console.log(A.prototype);
// console.log(objA.__proto__);

// console.log(objB.__proto__);