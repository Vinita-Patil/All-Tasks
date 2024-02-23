
//hoisting 
greet();

function greet() {
    setTimeout(() => {
        console.log("Hello, Good Morning !!!");
    }, 4000);
}

//using var
var a = 97863739398387784798;   //declaration hoisted to the top but initializaltion is not
console.log(a);  


//using let
for(let i = 0; i < 9; i++)     //using let it will show output 0,1,2,3,4,5,6,7,8 
{
    setTimeout(function(){     // using var it will show only 9
        console.log(i);
    }, i * 1000); 
}