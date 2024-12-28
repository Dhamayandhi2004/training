//variables
//var,let,const
//arrow function
// function  
arrowfun= (studentdsdept) => {
    return studentdsdept;

}
console.log(arrowfun(["aiml","CSE","it"]));

arrowfun1= (studentdsdept) => {
    console.log(studentdsdept);

}
arrowfun1(["aiml","CSE","it"]);

arrowfun2= (studentdsdept) => {
    return studentdsdept[2];

}
console.log(arrowfun2(["aiml","CSE","it"]));

//Destructuring operator
var mark=[90,95,93];
var [m1,m2,m3]=mark
console.log(m1,m2,m3);

//ternary operator
a=10;
out=(a%2==0)? "even":"odd";
console.log(a," is ",out)

//spread operator
arr1=[10,20,30];
arr2=[...arr1, 40,50,60];
arr3=[...arr1,arr2]
arr4=[...arr1,...arr2]
console.log(arr4)
console.log(arr3)

//Rest operator
function restop(...arr1){
console.log(arr1)
}
let a1=1,b1=2,c1=3;
restop(a1,b1,c1)

//scoper operator
var a=10;
const b=3.14;

console.log("a is",a);
console.log("b is",b);
{
    let a=10;
    let b=1833.3;
    console.log(a);
    console.log(b);
    
}
console.log(a);