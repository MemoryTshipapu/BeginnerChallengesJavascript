/* method that takes in a word and return "long" if the string is more than 6 characters
, "short" if the string is less than 6 characters */

function word_check(word) {
  if (word.length>6) {
    console.log("long");
  } else
    {
      console.log("short");
    }
};
word_check("memory");
word_check("Javascript");
