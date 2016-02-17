// Create a tree function that should build a pine tree out of a character in the browser console. It accepts a single object as an argument. The object should have two key/value pairs.
var height = document.getElementById("height");
var character = document.getElementById("character");
var button = document.getElementById("button");

function tree(treeObject) {
  for (var i = 1; i < treeObject.height; i++) {
    // removes space between characters
    var space = treeObject.height - i;
    var charNum = 2*i -1;
    console.log(" ".repeat(space) + treeObject.character.repeat(charNum));
  }
}
  // making sure user inputs in both fields or they get an alert
function userInput() {
  if (height.value && character.value) {
    console.log("height", height.value);
    console.log("character", character.value);
    var treeObject = {
      height: height.value,
      character: character.value
    }
    tree(treeObject);
  } else {
    alert("enter a value");
  }
  console.log("treeObject", treeObject);
}
button.addEventListener("click", userInput);
  // Once the user enters in a number, and a character, the user can either then just press the enter key (as long as the cursor is in one of the input fields), or click a button that is labeled "Grow your tree" and the tree should be shown in the console.
height.addEventListener("keydown", function(){
  if (event.keyCode === 13){
    button.click();
  };
});
character.addEventListener("keydown", function(){
  if (event.keyCode === 13){
    button.click();
  };
});