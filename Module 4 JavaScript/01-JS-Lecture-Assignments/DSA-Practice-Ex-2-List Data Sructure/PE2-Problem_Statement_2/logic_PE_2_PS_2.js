//pre define list defined list
let l = [10, 20, 40, "s", 60, "v"];

//display pre defined list on page
document.getElementById("preDefinedList").value = "[ " + l + " ]";

//get input text element for displying udpated list
var displayElm = document.getElementById("display");


//function call when clicked on add btn
function add() {
  var inputElm = document.getElementById("input")
  var input=inputElm.value.trim();

  //call isEmpty function which retun true if empty otherwise false
  if (isEmpty(input)) {
    inputElm.focus();
    inputElm.style.borderColor = "red";
    return;
  }

//if find smaller value in predefined list then it become false other wise default value i.e true
  var findSmall = true;

  //check for smaller value 
  for (var e of l) {
    console.log(input < e);
    if (input < e) {
      console.log(e);
      insert(input);
      findSmall = false;
      break;
    } else if (e == input) {
      alert("value alredy present plz enter another value");
      return;
    }
  }

  //call diplay funtion
  display();


  //msg for user is there present small or not.
  if (findSmall) {
    alert("Enter value is greater than the elements present in a list ");
  } else {
    alert("Value inserted succesfully");
  }
}


//insert into list
function insert(data) {
  l.push(data);
}


function display() {
  displayElm.value = "[ " + l + " ]";
}

//check is input field is empty or not 
function isEmpty(data)
{
    if (data=="")
    {
    alert("Input cannot be empty \n please provide value in input fox")
    return true
    }
    else
    {
        return false;
    }
    

}