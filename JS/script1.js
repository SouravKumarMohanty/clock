//                           THIS keyword

// 1. Global - Window
console.log(this);

//2. Function - Window
function abc(){
    console.log(this);
}
abc();

//3. Method - Object
var obj = {
    name : function abcd(){
        console.log(this);
    },
    age : 21,
    regdNo : 563,
}
obj.name();

//4. Function inside Method(es5) - method
var obj2 = {
    xyz : function ab(){
        function abcde(){
            console.log(this);
        }
        abcde();
    },
    Age : 22,
}
obj2.xyz();

//5. Function Inside Method(es6) - Object

var obj3 = {
    home : function(){
        const child = () => {           // arrow function sabubele parent ru value nie so parent object ta arrow function bhi object.
            console.log(this);
        }
        child();
    }
}
obj3.home();

//6. const fun re this ki value - new Blank object

function con(){
    console.log(this);
}
const ans = new con();

//7. event listener mein this ki value - that element jisper event listener laga ho
document.querySelector("button")
.addEventListener("click" , function(){
    console.log(this);
})
