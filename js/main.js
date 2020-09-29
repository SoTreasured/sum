window.addEventListener('scroll', function() {
    if(window.pageYOffset > 50){
        sum()
    }
})

function sum(){

let testCase,numbs,rem;
testCase = parseInt(window.prompt("enter textcase:"))
if (isNaN(testCase)){
    alert("Please input a valid number for your test cases");
    testCase = parseInt(window.prompt("enter textcase:"))
}elseif(testCase < 1 || testCase > 10){
    alert("Sorry, choose a number between 1 and 10");
    testCase = parseInt(window.prompt("enter textcase:"))
}else{
    return testCase;
}

for (let counter = 0; counter < testCase; counter++) {
   numbs = parseInt(prompt("Enter integers"))
   while(isNaN(numbs) || numbs == "" || (numbs < 1 || numbs > 100000)) {
       alert("Enter numbers between the range of 1 and 100000")
       numbs = parseInt(prompt("enter numbs:"))
   }
   var sum = 0;
   do{
       rem = numbs%10;
       sum += rem;
       sum = sum;

       numbs = parseInt(numbs/10);
   }while(numbs != 0)
   document.write(sum + '<br>')
}


}

