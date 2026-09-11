//class and object
class Student{
    constructer(name,age){
        this.name=name;
        this.age=age;
    }
    dispaly(){
        console.log(this.name);
        console.log(this.age);
    }
}
let s1=new Student("vivek",20);
s1.dispaly();