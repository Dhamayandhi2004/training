// var a=10;
// console.log(a);
// async b=10; //async keyword is used only in the operation or the functions.
// console.log(b);


//whenever using async we get Promise at the time of return type.

// normal function
async function fun(){
    return "hello";
}
console.log(fun());
//arrow function
fun1=async()=>{
    setTimeout1=(()=>{
    return "kec";
},1000)
}
console.log(fun1()) //in this undefined getting because the return statement is not returned within the 1second.To avoid the promise we use the await.

fun2=async()=>{
    console.log ("kec");
}
fun2()

console.log("to avoid promise");

async function fun3(){
    setTimeout(()=>{
        console.log("Hello");
    },5000)
    console.log(await"hello");
}
//Arrow function to avoid promise
funt=async()=>{
    setTimeout(()=>{
        return "KEC"
    },1000)
    console.log(await"kec");
}
fun3();
funt();
