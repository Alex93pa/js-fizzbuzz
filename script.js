var myList = []
var multiplo3 = i % 3 === 0
var multiplo5 = i % 5 === 0


for(var i=0; i <100; i++) {

    if (i % 3 === 0 && i % 5 === 0){
        myList.push("FizzBuzz")
    }else if(i % 5 === 0){
        myList.push("Buzz")
    }else if(i % 3 === 0){
        myList.push("Fizz")
    }else{
        myList.push(i)
    }
}

console.log(mylist);
document.getElementById("myList").innerHTML = mylist