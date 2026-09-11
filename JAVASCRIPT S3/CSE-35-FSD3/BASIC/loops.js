//loops
//if else
//     let a
// if(a>10){
    // console.log(a)
//}
//For(intillize;condition;increment/decrement)
for(let i=0;i<5;i++){
    console.log(i);
}
console.log("next")

//while
//do while
/******************************/
for(let j=1;;j+=2){
    console.log(j);
    if(j>10){
    
    
    console.log("next")
    break;
    }
    
}

let j=1;
for(;;){
    if(j>10){
        break;
    }
    console.log(j);
    j+=2;
}
    console.log("next");


let sum=0;
for(let i=0;i<=9;i++,sum+=i);
console.log(sum);
console.log("next");

outerloop:for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        if(j===1){
            break outerloop;
        }
        console.log(i);
        console.log("next")
    }
}

let b=(10,40+60)
console.log(b);

{
    let x=4,y=0;
    while(x>=0){
        x--;
        y++;
          if(x==y){
            break;
        } else {
                console.log(x,y);
          }
    }

    let secondX=4,secondY=0;
    while(secondX>=0){
        secondX--;
        secondY++;
        if(secondX==secondY){
            continue;
        }
        else{
            console.log(secondX,secondY);
        }
    }
}