const student1={
    name: "rahul",
};
const student2={
    name:"ravi",
};
function introduce(city){
    console.log("my name is ${name} and i live in a city ${city} ${age}");
}
introduce.apply(student1,["delhi",24]);