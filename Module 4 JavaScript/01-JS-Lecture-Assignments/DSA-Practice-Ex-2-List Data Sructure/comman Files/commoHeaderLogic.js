
//code to make a first letter of a every string present in a sentence.
var strElm = document.getElementById("firstLetterBold");
var str = document.getElementById("firstLetterBold").innerText;
var splitStr = str.toLowerCase().split(" ");

let modifyStr;
for (var i = 0; i < splitStr.length; i++) {
  splitStr[i] =
    splitStr[i].charAt(0).bold().toUpperCase() + splitStr[i].substring(1);
}
modifyStr = splitStr.join(" ");
strElm.innerHTML = modifyStr;
