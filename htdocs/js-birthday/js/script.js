var username = prompt("Enter your name:");
var age = prompt("Enter your age:");
var statement;
if (age >= 50)
    statement = "Wow! You're OLD!";
else
    statement = "Don't worry, you're still young!";
    
alert("Happy Birthday " + username + "! You're " + age + " years old. " + statement);
