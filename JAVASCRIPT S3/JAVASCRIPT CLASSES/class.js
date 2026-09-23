class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    display(){
        console.log("name",this.name);
        console.log("marks",this.marks)
}
}
const student = new Student("vivek", 96);
student.display();
