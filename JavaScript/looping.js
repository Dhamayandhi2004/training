array=[10,20,30,[40.5,50.6],"a","kec",true]
console.log(array)
for(var a in array){
    console.log(a);//printing the index
    console.log("element present on index",a," is ",array[a]);
}

for(var b of array){
    console.log(b)//printing the values
}