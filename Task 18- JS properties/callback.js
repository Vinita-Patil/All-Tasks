//add
function add(a,b){
   console.log(a + b)
}

function result(a, b, sum){
    sum(a, b);
}

result(500, 400, add);

//sub
function sub(a,b){
    console.log(a - b)
 }
 
 function result(a, b, sub){
     sub(a, b);
 }
 
 result(5000, 345, sub);

 //div
function div(a,b){
    console.log(a / b)
 }
 
 function result(a, b, div){
     div(a, b);
 }
 
 result(500, 50, div);

 //multiply
 
function mul(a,b){
    console.log(a * b)
 }
 
 function result(a, b, mul){
     mul(a, b);
 }
 
 result(500, 400, (a, b) =>{
    console.log(a * b);
 });

 //callback hell

 getData(1, () => {
    console.log("getting data 2 .....");
    getData(2, () => {
        console.log("getting data 3.....");
    })
    getData(3, () => {
        console.log("getting data 4.....");
    })
 })