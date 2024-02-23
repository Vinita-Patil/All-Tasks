
function first() {
    var name = "Numetry Technologies";
    var city = "Pune";

    function second() {
        console.log(name + " " + city);
    }
    return second;
}

let final = first();
final();


//using const
function maths(x) {
    return function (y) {
      return x * y;
    };
  }
  
  const mult5 = maths(5);
  const mult10 = maths(10);
  
  console.log(mult5(2)); 
  console.log(mult10(3));
  console.log(mult5(4)); 
  console.log(mult10(5)); 
  console.log(mult5(6)); 
  console.log(mult10(7));  
  