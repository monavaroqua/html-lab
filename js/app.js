console.log("mona and nouf");
alert("Welcome to MONO desserts");
var welcomemsg = prompt("ready to satisfy your tummy?", "yes");
var name =prompt("what's your name?");
var age = prompt("are you above 13 years old?");
while (age !== "yes" && age !== "no") {
    age = prompt("are you above 13 years old?");
}

var itemorder = '';
if (age == "yes") {
    itemorder = '<img src="https://occ-0-444-1001.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABVsHQNU8AQWudbHPUa-lFujAvnrpezTBPGCZ11EHrX32hPR18lNPL9gsv1dW3f6zrJILYhoL3aAccEi9507Amd-DjxERo5mO_M2R.png?r=60b" width="500" heigh="400"alt/>';

}
else if (age == "no") {
    itemorder = '<img src="https://miro.medium.com/max/2600/1*0IoZi3oGqSR22Sm-t6y6dQ.jpeg" width="500" heigh="400"alt />';

}
document.write(itemorder);
var numberoforders = prompt(" HOW many people you are ordering for?");
var result = '';
for(var i= 0; i<numberoforders; i++)
{
result = result + itemorder;
}

document.write(result);

function printGreeting(name) {
console.log("greeting " + name);
}
printGreeting("customer")