// list containg numbes and alphabets only
var list = [20, 30, "d", "s"];

document.getElementById("definedList").innerHTML = "[ " + list + " ]";
var updatedListElm = document.getElementById("updatedList");


function add() {
    
  var inputValue = document.getElementById("inputValue").value.trim();
  var valueType = checkAlphaOrNumbers(inputValue);

  if (valueType == "alpha") {
    if (checkInput(inputValue)) {
      insert(inputValue);
      displayOutput();
    } else {
      displayError();
    }
  } else if (valueType == "num") {
    if (checkInput(parseInt(inputValue))) {
      insert(inputValue);
      displayOutput();
    } else {
      displayError();
    }
  } else if (!valueType) {
    alert("Enter valid input only alphabet Or number is accepted");
  }
}

//to push data into list
function insert(date) {
  list.push(date);
}


//to diplay erroe if input is less than pesent element in list
function displayError() {
  alert("Value is not Greater than present element in the list");
}

//display updates list in label
function displayOutput() {
  updatedListElm.innerHTML = "[ " + list + " ]";
}


//using regex validate is data is alphabet or number
function checkAlphaOrNumbers(str) {
  var alpha = /^[A-Za-z]{1}$/;
  var num = /^[0-9]+$/;

  if (alpha.test(str)) {
    return "alpha";
  } else if (num.test(str)) {
    return "num";
  }

  return false;
}


//check value is grater than present or not
function checkInput(data) {
  var filterList = list.filter(function (element) {
    return typeof element == typeof data;
  });

  function bigger(number) {
    return data > number;
  }

  return filterList.every(bigger);
}
