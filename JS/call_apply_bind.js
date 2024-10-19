//  CALL
const obj = {name : "sourav"};
function abcd(){
     console.log(this);
 }
 abcd.call(obj);

//  APPLY

const obj1 = {name : "kumar"}
 function abcd(a,b,c){
    console.log(this,a,b,c );
 }
 abcd.apply(obj1 ,[2,3,4]);

 //   BIND

const obj2 = {name : "Mohanty"}
function abcd2(){
    console.log(this);
}
const baadmechalaanekeliye = abcd2.bind(obj2);
baadmechalaanekeliye();