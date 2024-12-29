
//e1
array=[10,20,30,40.5,50.6,'a','KEC',true];
console.log(array);
//in forEach the first parameter is always taken as element and second parameter is always its index.
array.forEach((element)=>{
    console.log("Element is",element);
})

array.forEach((element,index)=>{
    console.log("Element is",element,"and it index is ,",index);
})

array.forEach((index,element)=>{
    console.log("Element is",element,"and it index is ,",index);
})

//e2
console.log("example");
obj1={
    "firstname":"jhon",
    "lastname":"doe",
    "age":20
}
console.log(obj1);

for( key in obj1){
    val=obj1[key];
    console.log(key,val);
}

// for(var ele of obj1){
//     console.log(ele);
// }

obj1.forEach((key,value)=>{  // in this both key and value are user defined so it will through error because in above example the index is automatically assisgnned. 
console.log(key,value);
})
//task1) print the key value pair in forEach

