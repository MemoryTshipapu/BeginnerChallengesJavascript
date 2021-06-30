/* this method takes in a number and returns boolean true if the number is divisible by 5 
,otherwise it returns false  */

function is_div_by_5(num) {
  if (num%5===0){
    console.log("True");
  } 
  else{
    console.log("false");
  }
};
is_div_by_5(5);
is_div_by_5(10);
is_div_by_5(13);
is_div_by_5(4);