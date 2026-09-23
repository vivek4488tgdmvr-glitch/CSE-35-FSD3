const student={
    name:"rahul"
};
function show(){
    console.log("student:",this.name);
}
const x=show.bind(student);
x();