var myList = []
// var multiplo3 = i % 3 === 0
// var multiplo5 = i % 5 === 0


for(var i=0; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz")
    }else if(i % 5 === 0){
        console.log("Buzz")
    }else if(i % 3 === 0){
        console.log("Fizz")
    }else{
        console.log(i)
    }
}

console.log(myList);
document.getElementById("myList").innerHTML = myListkk