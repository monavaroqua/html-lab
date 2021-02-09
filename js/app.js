console.log("mona and nouf");
alert("Welcome to MONO desserts");
var welcomemsg = prompt("ready to satisfy your tummy?", "yes");
var age = prompt("are you above 13 years old?");
while (age !== "yes" && age !== "no") {
    age = prompt("are you above 13 years old?");
}

var itemorder = '';
if (age == "yes") {
    itemorder = '<img src="./../images/welcome.jpeg" width="500" heigh="400"alt/>';

}
else if (age == "no") {
    itemorder = '<img src="./../images/permission-required.jpg" width="500" heigh="400"alt />';

}
document.write(itemorder);
var numberoforders = prompt(" HOW many people you are ordering for?");
var result = '';
for(var i= 0; i<numberoforders; i++)
{
result = result + itemorder;
}

document.write(result);

