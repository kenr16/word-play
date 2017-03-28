$(document).ready(function() {
  $("#formOne").submit(function(event) {

    var userInput = $("input#sentence").val();
    var sentences = [];

    function splitString(stringToSplit, separator) {
      return stringToSplit.split(separator);
    }

    var outputArray = splitString(userInput, " ");

    var newArray = [];

    outputArray.forEach(function(word) {
      if (word.length >= 3) {
        newArray.push(word);
      }
    });
    newArray.reverse();
    newArray.toString();
    alert(newArray);


    event.preventDefault();
  });
});
