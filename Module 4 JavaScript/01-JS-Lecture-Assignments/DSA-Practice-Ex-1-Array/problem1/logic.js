
//student class
class StudentData {
  constructor(name) {
    this.name = name;
    this.marks = [];
    this.sub = [];
    this.average;
  }
}

//array to store a student class objects
let studentObj = [];


//to display a erroe in aler box 
function diplayError(id, msg) {
  alert(msg + "\n" + "Enter marks for subject :" + id);
}


//validating a form
function validForm() {
  var name = document.marksForm.name.value;

  for (ele in studentObj) {
    if (studentObj[ele].name == name) {
      alert("Student alredy present");
      return false;
    }
  }

  var marks = [];
  var sub = [];

  var checkboxes = document.getElementsByName("sub[]");
  var enterMarks = document.getElementsByName("marks[]");

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      if (enterMarks[i].value != "") {
        sub.push(checkboxes[i].value);
        marks.push(enterMarks[i].value);
      } else {

        //calling displayErroe Function
        diplayError(
          checkboxes[i].value,
          "There should be a marks in Selected subject beetween 0-100"
        );
        return false;
      }
    } else {
      marks.push("-");
    }
  }

  //calling functions
  createTableRow(name, marks, sub);
  addStudentData(name, marks, sub);

  return false;
}


//pusing object of a student in a studentObj array
function addStudentData(name, marks, sub) {
  var obj1 = new StudentData(name);

  obj1.marks = marks;
  obj1.sub = sub;
  var sum = 0;

  for (var i = 0; i < sub.length; i++) {
    if (marks[i] != "-") {
      sum = sum + parseInt(marks[i]);
    }
  }

  //to avoid a division of 0
  if (sum == 0 && sub.length == 0) {
    obj1.average = 0;
  } else {
    obj1.average = sum / sub.length;
  }

  //pushing a object into array
  studentObj.push(obj1);
}



let tb = document.getElementById("tablee");
let sr = 1;


//adding rows in a table with student marks
function createTableRow(name, marks, sub) {
  var java = marks[0];
  var python = marks[1];
  var javascript = marks[2];

  let template = `
  <tr>
    <td>${sr}</td>
    <td>${name}</td>
    <td>${java}</td>
    <td>${python}</td>
    <td>${javascript}</td>
    <td>${sub.length}</td>
    <td id=${sr}></td>
  </tr>`;

  tb.innerHTML += template;
  sr = sr + 1;
  document.getElementById("myForm").reset();
}



let avgBtn = document.getElementById("avgBtn");

//printing a average marks of a students when click on btn
avgBtn.addEventListener("click", () => {
  for (var i = 0; i < studentObj.length; i++) {
    document.getElementById(i + 1).innerHTML = studentObj[i].average;
  }
});
