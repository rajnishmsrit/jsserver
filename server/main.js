var a = 5;

{
    let a=7;
    console.log(a);
    {
        a=100;
        console.log(a);
    }
}
a = 40;
console.log(a);

// Scope
// Overrides
// let/const overriding var // reverse isn't possible
// scope as a venn diagram
