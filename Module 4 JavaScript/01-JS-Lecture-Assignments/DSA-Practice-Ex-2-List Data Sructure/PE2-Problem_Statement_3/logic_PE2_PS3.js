var form = document.getElementById("inputForm");
var selectedPersonList = document.getElementById("selectedPersonList");
var sortTbl = document.getElementById("sortTbl");

//created a list to store a persone class object
let PsListObj = [];

//person class which stores a name and gender
class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

//add fucntion which is called when user clicked on add btn on form
function Add() {
  var name = document.inputForm.name.value;
  var g = document.inputForm.gender.value;

  //regex for first name validaton
  if (!checkName(name)) {
    alert(
      "Enter valid First Name \nNo spaces , numbers ,middle or last name \nFirst name should at least consist of 3 alphabets"
    );
    document.getElementById("name").focus();
    return false;
  }

  var pObj = new Person(name, g);

  if (PsListObj.length > 0) {
    isPresent = false;
    for (var obj of PsListObj) {
      if (JSON.stringify(obj) === JSON.stringify(pObj)) {
        alert(
          "This Person is already exist \nPlease insert another person details"
        );
        isPresent = true;
        break;
      }
    }

    if (!isPresent) {
      insert(pObj);
    } else {
      return false;
    }
  } else {
    insert(pObj);
  }

  resetForm();

  return false;
}

//to make make gender and name field empty
function resetForm() {
  form.reset();
}

//to  validate a name enter by an user
function checkName(name) {
  var r = /^[a-zA-Z]{3,}$/;
  return r.test(name);
}

//push into person list
function insert(obj) {
  PsListObj.push(obj);

  //code to add in list
  var li = document.createElement("li");
  var text = document.createTextNode(obj.name + "->" + obj.gender);
  li.appendChild(text);
  selectedPersonList.appendChild(li);
  alert(
    "Person details added successfully \n " +
      "Total Person : " +
      PsListObj.length
  );
}

//function call when click on button(Sort By Gender)
function sort() {
  var mList = [];
  var fList = [];

  //run only if 5 objects is added in main list
  if (PsListObj.length >= 5) {
    //removed oprevious table body
    sortTbl.innerHTML = "";

    //sorting male and female in respective list
    for (var obj of PsListObj) {
      if (obj.gender == "Male") {
        mList.push(obj);
      } else {
        fList.push(obj);
      }
    }
  } else {
    alert("Please enter atleat five different persons data");
    return false;
  }


  //checking for sorted man
  if (mList.length > 0) {
    for (var i in mList) {
      if (i == 0) {
        addMaleFirstRow(mList[0], mList.length);
      } else {
        addrows(mList[i], parseInt(i) + 1);
      }
    }
  }


   //checking for sorted female
  if (fList.length > 0) {
    for (var i in fList) {
      if (i == 0) {
        addFemaleFirstRow(fList[0], fList.length);
      } else {
        addrows(fList[i], parseInt(i) + 1);
      }
    }
  }
}


//formating table for first row of male
function addMaleFirstRow(obj, rowspanValue) {
  var tr = document.createElement("tr");

  var tdgen = document.createElement("td");
  tdgen.setAttribute("rowspan", rowspanValue);
  tdgen.appendChild(document.createTextNode("Male"));

  var tdsr = document.createElement("td");
  tdsr.appendChild(document.createTextNode(1));

  var tdName = document.createElement("td");
  tdName.appendChild(document.createTextNode(obj.name));

  tr.appendChild(tdgen);
  tr.appendChild(tdsr);
  tr.appendChild(tdName);
  sortTbl.appendChild(tr);
  // console.log(sortTbl)
}


//adding other than first row
function addrows(obj, sr) {
  var tr = document.createElement("tr");

  var tdsr = document.createElement("td");
  tdsr.appendChild(document.createTextNode(sr));

  var tdName = document.createElement("td");
  tdName.appendChild(document.createTextNode(obj.name));

  tr.appendChild(tdsr);
  tr.appendChild(tdName);
  sortTbl.appendChild(tr);
}


//formating table for first row of female
function addFemaleFirstRow(obj, rowspanValue) {
  var tr = document.createElement("tr");

  var tdgen = document.createElement("td");
  tdgen.setAttribute("rowspan", rowspanValue);
  tdgen.appendChild(document.createTextNode("Female"));

  var tdsr = document.createElement("td");
  tdsr.appendChild(document.createTextNode(1));

  var tdName = document.createElement("td");
  tdName.appendChild(document.createTextNode(obj.name));

  tr.appendChild(tdgen);
  tr.appendChild(tdsr);
  tr.appendChild(tdName);

  sortTbl.appendChild(tr);
}
