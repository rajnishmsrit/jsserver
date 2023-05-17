var obj={a:{b:{c:{d:"foo"}}}}

function deepCopyExample(obj) {
  const copiedObject = {};
  for(let[key, value] in Object.entries(obj)){
    if(typeof(value) === "Object"){
      copiedObject
    }
    console.log(key, value);
  }
}

console.log(obj);

// recursion
// 