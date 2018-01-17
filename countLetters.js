// make function that counts letters from a variable
// function must tell us how many instances of each letter are fuound
//function should return individual letters as an object key and instances of letters as value
// skip the spaces only count letters


// above console.log makes sentence an array of letters


function countLetters (sentence) {
  var sentence = "All work and no play, makes Jack a dull boy.";
  sentence = sentence.replace(/[^A-z]/g, '').toLowerCase().split('').sort();
  var count =  {};
  //var letters = ''; = key
  //var instances = ''; = value
  for (var  i = 0; i < sentence.length; i++) {
    if (count[sentence[i]]) {
      count[sentence[i]] += 1;
  } else {
      count[sentence[i]] = 1;
  }
  }
  return count;
}
console.log(countLetters());