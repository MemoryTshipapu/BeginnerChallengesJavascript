/* this method takes in a number and return true if the number divisible by either 5 or 3,
but not both , in that case it should return ,false */

function either_only(num){
  if (num%3===0 && num%5===0){
    console.log("False");
  }
  else if (num%3==0 || num%5===0) {
    console.log("True");
  } else
  {
    console.log("Number entered is not divisible by 5 or 3");
  }
};
  either_only(25);
  either_only(15);
  either_only(6);
  either_only(4);