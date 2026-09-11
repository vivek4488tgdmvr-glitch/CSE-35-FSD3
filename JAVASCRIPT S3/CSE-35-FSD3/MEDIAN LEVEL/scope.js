//global scope 
let a=5;
function func(){
    console.log(a);
}
func();

//function scope
function func1(){
    let b=10;
    console.log(b);
}
func1();

//block scope
if(true){
    let c=15;
    let d=20;
    console.log(c);
    console.log(d);
}

//hoisting


console.log(name);
var name="John";
/*
console.log(age);//reference error
//tdz start
let age=20;//temperal danger zone -the period btw entering a scope of intialise a constant and end is called TDZ.
//tdz end
*/

//clousure-innner function will remember all the variable of outer function even when it finished is called clousure function.

function outer(){
    let counter=0;


    function inner(){
        counter++;
        console.log(counter);

    }
       
        return inner();
        
    
}
let innerFunc=outer();
    


