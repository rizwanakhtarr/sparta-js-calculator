alert("Hello!");
var hello = prompt("what is your name?");
alert("Hi " + hello + "! click okay to proceed and perform various calculations");

console.log(hello);

var setting = prompt("Which setting would you like to select, type 1 for advanced and 2 for basic");

var settingOne = "1";
var settingTwo = "2";


if (setting == "2") {
  var option = prompt("Would you like to (m)ultiply, (d)ivide, (a)dd or (s)ubstract?");

  var num1 = prompt('number1?');
  var num1convert = parseFloat(num1);
  var num2 = prompt('number2?');
  var num2convert = parseFloat(num2);


  if (option == "m") {
    alert(num1convert*num2convert);
  } else if (option == "s") {
    alert(num1convert-num2convert);
  } else if (option == "d") {
    alert(num1convert/num2convert);
  } else if (option == "a") {
    alert(num1convert + num2convert);
  }

} else if (setting == "1") {
  var option2 = prompt("Would you like to (sq)root, (p)ower?");

  var num1 = prompt('number1?');
  var num1convert = parseFloat(num1);
  var num2 = prompt('to the power of which number?');
  var num2convert = parseFloat(num2);

  if (option2 == "p") {
    var power = Math.pow(num1, num2);
    alert(power);
  } else if (option2 == "sq") {
    var root = Math.sqrt(num1, num2);
    alert(root);
  }


}
