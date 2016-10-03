function NegateBinary(input){
console.log(input);
/*var inputArr = input.toString().split("");
console.log(inputArr);*/
var x = input;
var num =0 , rem ="";
while(x) {
 rem += x%2;
 x = Math.floor(x/2);
}
console.log("rem",rem);
var BeforeNegatedArr = rem.split("");
var AfterNegatedArr ="";
for(var i =0 ; i< BeforeNegatedArr.length ; ++i){
  if(BeforeNegatedArr[i] == 0)
    AfterNegatedArr += 1;
  else
    AfterNegatedArr +=0;

}
console.log("negated Arr" , BeforeNegatedArr);
var negatedReverse = AfterNegatedArr.split("").reverse();
console.log("negated reverse", negatedReverse); //010

var output = 0;
for(var i =0; i<negatedReverse.length; ++i) {
  output += negatedReverse[i]*Math.pow(2,(negatedReverse.length-1-i));
  console.log(output);

}
console.log('output',output);
}

console.log(NegateBinary(100))