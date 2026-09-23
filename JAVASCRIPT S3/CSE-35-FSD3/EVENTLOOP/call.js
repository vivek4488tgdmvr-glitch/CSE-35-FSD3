const student1={
    name: "rahul",
};
const student2={
    name:"ravi",
};
function introduce(city){
    console.log("my name is ${name} and i live in a city ${city}");
}
introduce.call(student1,"delhi");