


var string = prompt("Please enter a string");
var len = string.length;
var msg = "It is a Palindrome";
for(var i = 0; i < len/2; i++){
  if(string[i] != string[len - 1 - i]){
    msg = "It is not a Palindrome";
  }
}
console.log(`${string}: ${msg}`);


