
const promise=new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve("operation successful")

    }else{
        reject("operation failed")
    }

});


promise.then(result=>{
    console.log(result)
})

.catch(error=>{
    console.log(error);
})