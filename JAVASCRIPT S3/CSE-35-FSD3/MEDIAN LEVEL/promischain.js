function step1(){
    return Promise.resolve(10);

}

step1().then(result=>{
    console.log("step1",result);
    return result+10;
}).then(result=>{
    console.log("step2",result);
    return result+10;
}).then(result=>{
    console.log("step3",result);
    
}).catch(error=>{
    console.log(error);
})