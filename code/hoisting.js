var x;





























// Hoisting
// d=4;
// console.log(d);
// var d; d=3;
// console.log(foo); // undefined
// var foo = 123;

x();

y = 4;
var y;
console.log(y);
function x () {
  let a; // Declaration variableName = Expression;
  console.log("from inside of x")
  //var c = (var d = 3);
}



// let a = 5;
// class Animal {
//   name="animal";
//   talk=function (){
//     console.log("talking");
//   };
// }

// function add() {
//   let counter = 0;
//   function plus() {counter += 1;console.log(counter);}
//   plus();   
//   return counter;
// }

// add();

// function alpha() {
//   let a = 5;
//   function beta() {
//     console.log(a++);
//   }
//   return beta();
// }

// //alpha();

// //setState(state+4);
// function useState(initialState){
//   let count = initialState;
//   function newState(newValue){
//     count=newValue
//   }
//   return [count, newState];
// }

// const [state, setState] = useState(0);

// console.log("currentState value is :: " + state)
// setState(3);
// console.log("currentState value is :: " + setState(3))



  // function games() {
  //   console.log(cricket);
  // }
  // var cricket=10;
  // games();
  // let and const
  
  // d, var d, let d, const d
  
 
  
  //var a =5; //Global Scope
  // function data () {
  //   // Local scope
  // }
  
  {
   // Block scope is a kind of local scope
  }
  
  
  // beta = 4;
  // function name () {
  //   var beta = 5;
  // }
  
  // console.log(beta); // throws error
  
  // Lexical environment
  
  // Temporal Dead Zone
  
  // let age = 50;
  
  
  // function printAge() {
  //   console.log(age);
  //   let age = 30;
  // }
  
  // printAge(); // Error
  