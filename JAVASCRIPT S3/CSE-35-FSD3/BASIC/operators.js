/*************************************** */
/// node "d:\TESTING\JAVASCRIPT S3\operators.js"
/*************************************** */






//Arithmetic Operators +,-,*,/,%,**,=


let s=3*2.00
console.log(s)
let remainder=5%3
console.log(remainder)
let p=-3%-5
console.log(p)
const mod=(dividend, divisor)=>(dividend%divisor+divisor)%divisor
console.log(mod(2,5))

//relational Operators  <,>,<=,>=,==,!=,===,!==

let n=100
console.log(n)
let five='5'
console.log(five=='5')
let fiveNum=5
console.log(fiveNum==='5')

//selection or decision ctrl statements if,if else,if else if, switch
let z=2024%4//leap year check
console.log(z)

let year=2025
if(year%4==0 && year%100!=0 || year%400==0){
    console.log('leap year')
}else{
    console.log('not a leap year')
}
//let c=2024;
//if(c%100==0){
//    if(c%400==0){                       SOME FAULT IN IT
//        console.log(' leap year')
//    }
//    else{
  //      console.log(' not aleap year')
 //   }
//}
//ternary operator ?:
let age=18
let result=(age>=18)?'eligible to vote':'not eligible to vote'
console.log(result)
// binary operator & bitwise operators &,|,^,~,<<,>>,>>>  +,*,/,(-),<=,%

// unary operator ++,--
//logic operators &&,||,!  AND,OR,NOT , tilde ~
let a=50
let b=10
if(a<b && a>0){
    console.log('a is less than b and a is greater than 0')
}
else{
    console.log('a is not less than b or a is not greater than 0')
}

console.log(a<b && a>0)
console.log(a>b || a>0)
console.log(!(a>b))

//conditional operator ?statement1:statement2;
let x=10<20?'x is less than 20':'x is greater than 20'
console.log(x)

//switch statement


//comma operators

for(i=0,j=a.length-1;i<j;i++,j--){
    a[i]=t;
}


//var,let,const
if(true)
{
    var name="rahul";
    console.log(name);
}
console.log(name);



//function

function start()
{
   var  name='abc';
    console.log(name);
    if(true)
    {
         name='xyz';

    }
    console.log(name);
}

start();


//'Hoisting'

