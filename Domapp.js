var msg = document.querySelector("#message");
msg.innerHTML = "Welcome!";

var nnn = document.querySelector("#nameInput").value;
document.querySelector("#result").innerHTML = nnn;

document.querySelector("button").onclick = function() {
  document.querySelector("#container").style.backgroundColor = "lightblue";
};

document.querySelector("#mainTitle").style.color = "red";

var n1 = document.querySelector("#num1").value;
document.querySelector("#output").innerHTML = n1;

document.querySelector(".submit-btn").onclick = function() {
  console.log("Button Clicked");
};

var a = Number(document.querySelector("#first").value);
var b = Number(document.querySelector("#second").value);
document.querySelector("#sum").innerHTML = a + b;

document.querySelector(".description").innerHTML = "Updated successfully";

var bx = document.querySelector("#box");
bx.style.width = "200px";
bx.style.backgroundColor = "green";

var mail = document.querySelector("#email").value;
console.log(mail);

document.querySelector("p").style.fontSize = "24px";

document.querySelector("button").onclick = function() {
  var naam = document.querySelector("#fullName").value;
  document.querySelector("#greeting").innerHTML = "Hello, " + naam;
};

document.querySelector("#profilePic").src = "https://via.placeholder.com/150";

var allll = document.querySelectorAll(".highlight");
for (var i = 0; i < allll.length; i++) {
  allll[i].style.color = "orange";
}

var boxy = document.querySelector("#agree");
var msgg = document.querySelector("p");
if (boxy.checked) {
  msgg.innerHTML = "Agreed";
} else {
  msgg.innerHTML = "Not Agreed";
}

var pick = document.querySelector("#options").value;
document.querySelector("#selectedValue").innerHTML = pick;

document.querySelector("button").onclick = function() {
  var now = new Date();
  document.querySelector("#dateTime").innerHTML = now;
};

document.querySelector("#togglePara").style.display = "none";

var agy = document.querySelector("#age").value;
if (agy >= 18) {
  document.querySelector("span").innerHTML = "Eligible";
} else {
  document.querySelector("span").innerHTML = "Not Eligible";
}

document.querySelector("button").onclick = function() {
  document.querySelector("#searchBox").value = "";
};