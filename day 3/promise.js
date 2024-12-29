//Location finder
function locationfinder(){
    train=7;
return new Promise((resolve,reject)=>{
    if(train==7){
        resolve("train is arrived.");
    }
    else{
        reject('train has not arrived.');
    }
})
}
console.log(locationfinder())


//to handle rejection

function locationfinder1(){
    train=9;
return new Promise((resolve,reject)=>{
    if(train==7){
        resolve("train is arrived.");
    }
    else{
        reject('train has not arrived.');
    }
})
}
locationfinder1().then((resolveMsg) => {
console.log(resolveMsg)
}).catch(function(rejectMsg){
    console.log(rejectMsg)
})
//locationfinder

function locationFinder(){
    loc="Mysore";
    t=1000;
    return new Promise((locFound,locNotfound)=>{
        setTimeout(()=>{
            if(isValidLocation(loc)&&isTimeConsumption(t)){
                locFound("location found");
            }
            else{
                locNotfound("location not found");
            }
        },t)
    })
}
function isTimeConsumption(t){
    time=999;
    return time <=t;
}
function isValidLocation(loc){
    location="ooty";
    return location==loc;
}
locationFinder().then((msg)=>{
    console.log(msg);
}).catch(function(msg){
    console.log(msg);
})