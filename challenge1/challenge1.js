//ststement to ask the user for their marks
function myCalc(){
let x = prompt("What is your  marks?");
//The statement to produce the required output if a certain condition is met.
if (x<40){
    console.log("E")
}
else if(x>=40 && x<=49){
    console.log("D");
}
else if(x>=50 && x<=59){
    console.log("C");
}
else if(x>=60 && x<=79){
    console.log("B");
}
else{
    console.log("A");
}
}
myCalc();