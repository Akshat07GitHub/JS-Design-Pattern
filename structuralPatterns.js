// Module Pattern 
//keywords used in module is import and export

const X = () =>{
    return 'Hello'
}

export default a;

//this is a module 


// Mixins Pattern   

class MixinCheck {
    constructor(){

    }
    sample(){
        return 'Hello Sample';
    }
   // @MixinF
}

const MixinF = {
    addFunctionInA(){
        return "Added as a part of A"
    }
}
Object.assign(MixinCheck.prototype,MixinF);
const checkMixinInPrototype = new MixinCheck();
console.log(checkMixinInPrototype);


//Facade Pattern 
//It is just hiding the complexity of the code by creating a Facade 
//Like in React we create components all the complexity lies in the component and we use single lines when we want to use that in our code 


//Fly Weight Pattern 
// It is there to prevent the loading/creation of items twice in the memory
// Example = By Not calling same Endpoint twice if user clicks 2 we call once 
// Example = Not loading images twice by browser 

// Decorator Pattern 
// Its a pattern where we add more functionality to our exisiting code similar to Mixin 
// Its not official in JS till Now Jan'23

//MVC 
//MVP
//MVVM

