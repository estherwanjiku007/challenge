function myCalc(){
let x = prompt("What is your  marks?");
//The statement to produce the required output if a certain condition is met.
if (x<40){
    return "E"
}
else if(x>=40 && x<=49){
    return "D";
}
else if(x>=50 && x<=59){
    return "C";
}
else if(x>=60 && x<=79){
    return "B";
}
else{
    return "A";
}
}
myCalc();

