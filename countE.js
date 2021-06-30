//a method that takes in astring word and returns the number of e's in the word

let count;
function count_e(word) {
 result=word.match(/[e]/g);
  console.log(result);
};
count_e("Once you choose hope, anything is possible")
console.log(result.length);