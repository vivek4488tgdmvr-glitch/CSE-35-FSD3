//set interval function
let count=1;
let timer=setInterval(() => {
    console.log(count)
    count++
if(count==0){    //infinite loop 
    clearInterval(timer);

}
}, 5000);