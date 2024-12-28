//Assignmant operator
var a=12;
const b=35;
let c=29;
console.log(a,b,c);

//Arithmetic operator
let a1=100;
var b1=20;
console.log(a1+b1);
console.log(a1-b1);
console.log(a1*b1);
console.log(a1/b1);
console.log(a1%b1);

//Relational operator
var a2=490;
const b2=193;
var m0=20;
var n0=23;
var m1=90;
var n1=90;
var m2=39;
var n2=39;
let x0=88;
let y0=88;
if(a2>b2)
{
    console.log(a2," is greater than ",b2);
}

if(m0<n0){
    console.log(m0,"  is lesser than ",n0);
}
if(m1>=n1){
    console.log(m1," is greater than or equal to ",n1);
}

if(m2<=n2){
    console.log(m2," is lesser than or equal to ",n2);
}
if(x0==y0){
 console.log(x0," is equal to ",y0);
}
if(x0===y0){
    console.log(x0," is strictly equal to ",y0);
}
if(a1!=m1){
    console.log(a1," is not equal to ",m1);
}
if(a2!==n2)
{
    console.log(a2," is not strictly equal to ",n2);
}
else {
    console.log("invalid");
}

//Logical operator
var x=900;
var y=900;
if(x==900&&y==900){
    console.log("true")
}
else{
    console.log("false");
}
var x2=19;
var y2=80;
if(x2==80||y2==80){
    console.log("true");
}
else{
    console.log("false");
}

//Bitwise operator
var i=9;
var j=10;
console.log(i&j);
console.log(i|j);
console.log(i<<j);
console.log(i>>j);

//Ternary operator
var t=10;
var u=9;
var k=(t>u) ? "t is greater":"u is greater";
console.log(k);
