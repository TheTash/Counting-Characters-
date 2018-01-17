// make function that counts letters from a variable
// function must tell us how many instances of each letter are fuound
//function should return individual letters as an object key and instances of letters as value
// skip the spaces only count letters



//function countIterations(sentence)


function charPositioning(sentence) {

  var sentence = sentence.split('');

  var count = {};

  for (var  i = 0; i < sentence.length; i++){
    var index = [];
    index += sentence[i];
    if (count[sentence[i]]){
      count[sentence[i]].push(i);
    } else if (sentence[i] != ' ') {
      count[sentence[i]] = [i];
    }
  }
  return count;
}


console.log(charPositioning("All work and no play, makes Jack a dull boy."));