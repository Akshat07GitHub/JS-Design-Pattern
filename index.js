const func = () =>{
    return 2*4;
}

let a = func();

console.log(a);
//Functions are first class citizens.
//This means that functions have the same functionality as objects. 
//For example, they can be assigned to variables, passed in as arguments, or returned from a function. 
//Callback: A function passed into another function as an argument.

const complex = (callback) =>{
    console.log(callback());
}

complex(func);


//creational pattern in JS 
//creational design patterns are design patterns that deal with object creation mechanisms, trying to create objects in a manner suitable to the situation

//Class Design Pattern
class A {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
let Obj = new A(20,30);
console.log(Obj)

//Constructor Pattern

class B extends A{
    constructor(a,b,c){
        super(a,b);//calling A's constructor to initialize
        this.c = c;
    }
}

let ObjB = new B(10,20,30); // if not passed any value undefined
console.log(ObjB);

//singleton pattern 
let instance = null
class C extends A {
    constructor(a,b,c,d){
        if(!instance){
            super(a,b)
            this.c = c;
            this.d = d;
            instance = this;
        }
        else{
            return instance
        }
    }
}

let oneInstance = new C(10,'one',20,30)
let secondInstance = new C(100,200,300,400) // still holds first instance 
console.log(oneInstance,secondInstance)

// factory 

// abstract factory 
