console.log("mona and nouf");
alert("Welcome to MONO desserts");
var welcomemsg = prompt("ready to satisfy your tummy?", "yes");
var age = prompt("are you above 13 years old?");
while (age !== "yes" && age !== "no") {
    age = prompt("are you above 13 years old?");
}

var itemorder = '';
if (age == "yes") {
    itemorder = '<img src="../images/welcome.jpeg" />';

}
else if (age == "no") {
    itemorder = '<img src="../images/permission-required.jpg" />';

}
document.write(itemorder)