function talk () {
    console.log(this);
    console.log(this.sound);
}

let animal = {
    talk
}
const cat = {
    sound : "meow"
}

Object.setPrototypeOf(cat, animal);
cat.talk();