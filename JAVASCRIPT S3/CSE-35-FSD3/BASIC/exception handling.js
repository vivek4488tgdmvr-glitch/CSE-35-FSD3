//exception handling
try{
    let a=10;
    
    console.log(a);
    console.log(b);
}
catch(error){
    console.log(error);

}

finally{
    console.log('this is finally block');

}

//custom error
function checkAge(age){
    if(age<18){
        throw new Error('age is less than 18');
    }
    else{
        console.log('age is greater than 18');
    }
}
try{
    checkAge(15);
}
catch(error){
    console.log(error.message);
}