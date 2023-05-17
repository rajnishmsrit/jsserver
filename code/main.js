console.log("Hello")
const result = new Map();

function factorial(number){

  console.log(result);
  if (result.has(number)){
    console.log("New calculation wasn't made")
    return result.get(number)
  } else {
    console.log("New calculation was made")
    result.set(number, number*number);
    return result.get(number);
  }
  
}

console.log(factorial(4))
console.log(factorial(4))