//higher order function is a function that takes another function as an argument or returns a function as a result.
function calculate(a,b,operation){
    return operation(a,b);


}
function add(x,y){
    return x+y;
}

function multiply(x,y){
    return x*y;
}
console.log(calculate(51,100,add));
console.log(calculate(53,10,multiply));


//.map
let  num=[1,2,3,4,5];
//for(i=0;i<num.length;i++){
  //  num[i]=num[i]*2;    for loop method
//}
let square=num.map(function(num){
    return num*num;
});

console.log(num,square);

//using arrow function 

let number=[1,2,3,4,5];
let s=number.map(number=>number*number);

console.log(s);

//filter

let numbers=[1,24,3,4,5];
let even=numbers.filter(numbers=>{
    return numbers%2==0;
});
console.log(even);

//reduce

let no=[10,200,55,71,39];
let total=no.reduce((sum,no)=>{
    return sum+no;
},0);
console.log(total);
//sort hand
let totals=no.reduce((max,no)=>{
    return no>max?no:max;

},no[0]);
console.log(totals);


//find

let students=[
    
       {id:1,name:"vivek",marks:100},
       {id:2,name:"rahul",marks:90},
       {id:3,name:"ravi",marks:80},
       {id:4,name:"vishal",marks:70}
    
];
let student=students.find(s=>s.id==2);
console.log(student);

