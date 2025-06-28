var mmm = prompt("Enter your marks:");
if (mmm >= 80 && mmm <= 100) {
  alert("Distinction");
} else if (mmm >= 50 && mmm < 80) {
  alert("Pass");
} else if (mmm >= 0 && mmm < 50) {
  alert("Fail");
} else {
  alert("Invalid Marks");
}


var agy = prompt("Enter your age:");
var mem = prompt("Are you a premium member? (yes/no)");
if (agy >= 60 && mem == "yes") {
  alert("Senior Premium Discount");
} else if (agy >= 60) {
  alert("Senior Discount");
} else if (mem == "yes") {
  alert("Premium Discount");
} else {
  alert("No Discount");
}


var logg = prompt("Are you logged in? (yes/no)");
var emmm = prompt("Is your email verified? (yes/no)");
if (logg == "yes" && emmm == "yes") {
  alert("Access granted");
} else if (logg == "yes") {
  alert("Please verify your email");
} else {
  alert("Please log in");
}
var conAge = prompt("Enter your age:");
var conCountry = prompt("Enter your country:");
var conBan = prompt("Are you banned? (yes/no)");
if (conBan == "yes") {
  alert("You are banned from the contest");
} else if (conAge < 18 || conAge > 35) {
  alert("Not eligible due to age");
} else if (conCountry != "Pakistan" && conCountry != "India") {
  alert("Not eligible due to region");
} else {
  alert("You are eligible for the contest");
}


var subs = prompt("Enter your subscription (premium/free):");
var logg2 = prompt("Are you logged in? (yes/no)");
if (subs == "premium" && logg2 == "yes") {
  alert("Welcome Premium User");
} else if (subs == "free" && logg2 == "yes") {
  alert("Welcome Free User");
} else if (logg2 == "no") {
  alert("Please log in to continue");
} else {
  alert("Invalid subscription");
}


var pric = prompt("Enter product price:");
var stok = prompt("Enter stock count:");
var memm = prompt("Are you a member? (yes/no)");
if (stok == 0) {
  alert("Out of stock");
} else if (pric > 1000 && stok > 0 && memm == "yes") {
  alert("Buy now with discount");
} else if (stok > 0) {
  alert("Buy now");
} else {
  alert("Invalid product");
}


var wh = prompt("How many hours did you work?");
var wk = prompt("Is it weekend? (yes/no)");
if (wh == 0) {
  alert("No work");
} else if (wh > 40 && wk == "no") {
  alert("Overtime");
} else if (wk == "yes" && wh > 0) {
  alert("Weekend work");
} else {
  alert("Regular hours");
}


var ag3 = prompt("Enter your age:");
var gend = prompt("Enter your gender (male/female):");
if (ag3 >= 13 && ag3 <= 19 && gend == "male") {
  alert("Teen Male");
} else if (ag3 >= 13 && ag3 <= 19 && gend == "female") {
  alert("Teen Female");
} else if (ag3 >= 20) {
  alert("Adult");
} else {
  alert("Child");
}


var tempp = prompt("Enter temperature:");
var humid = prompt("Enter humidity:");
if (tempp >= 40 && humid >= 60) {
  alert("Heatwave Alert");
} else if (tempp >= 40 && humid < 60) {
  alert("Hot and Dry");
} else if (tempp <= 20) {
  alert("Cool Weather");
} else {
  alert("Moderate");
}

var scoree = prompt("Enter score (0-100):");
if (scoree >= 90 && scoree <= 100) {
  alert("Excellent");
} else if (scoree >= 70) {
  alert("Good");
} else if (scoree >= 50) {
  alert("Average");
} else if (scoree >= 30) {
  alert("Poor");
} else if (scoree >= 0) {
  alert("Fail");
} else {
  alert("Invalid Score");
}

var isLog = prompt("Are you logged in? (yes/no)");
var isEnroll = prompt("Are you enrolled? (yes/no)");
var isBan = prompt("Are you banned? (yes/no)");
if (isBan == "yes") {
  alert("User is banned");
} else if (isLog == "no") {
  alert("Please log in");
} else if (isEnroll == "no") {
  alert("Enroll in course first");
} else {
  alert("Access granted");
}

var spd = prompt("Enter your speed:");
var hasLic = prompt("Do you have a license? (yes/no)");
if (spd > 120) {
  alert("License suspended");
} else if (spd >= 100 && spd <= 120) {
  alert("Warning");
} else if (spd <= 100 && hasLic == "yes") {
  alert("Normal driving");
} else {
  alert("Driving without license");
}


var pay = prompt("Is payment complete? (yes/no/pending/failed)");
var ship = prompt("Is it shipped? (yes/no)");
if (pay == "failed") {
  alert("Payment failed");
} else if (pay == "pending") {
  alert("Awaiting payment");
} else if (pay == "yes" && ship == "no") {
  alert("Preparing your order");
} else if (pay == "yes" && ship == "yes") {
  alert("Order on the way");
} else {
  alert("Invalid order status");
}


var bLevel = prompt("Enter battery level (0-100):");
var chrg = prompt("Is it charging? (yes/no)");
if (bLevel == 100) {
  alert("Fully Charged");
} else if (bLevel < 100 && chrg == "yes") {
  alert("Charging...");
} else if (bLevel < 20 && chrg == "no") {
  alert("Low Battery");
} else {
  alert("Battery OK");
}


var brow = prompt("Enter your browser:");
var dev = prompt("Enter your device (Mobile/Desktop):");
if (brow == "Chrome" && dev == "Desktop") {
  alert("Full features enabled");
} else if (brow == "Chrome" && dev == "Mobile") {
  alert("Limited mobile features");
} else {
  alert("Please switch to Chrome");
}