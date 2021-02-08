var name = prompt("enter your name");
var userNumbers = [];
for (var i = 0; i < 10; i++) {
    var number = +prompt(`Enter number ${i + 1}`);
    userNumbers.push(number);

}
console.log(userNumbers);