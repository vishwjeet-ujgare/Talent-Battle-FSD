class student {
  constructor(r, f, l, d, a, e, g,department) {
    this.rollNo = r;
    this.firstName = f;
    this.lastName = l;
    this.dob = d;
    this.age = a;
    this.email = e;
    this.gender = g;
    this.department=department;
  }
}

let i = 1;
let ObjList = [];
let submitForm=false;

function displayRollNo(i) {
  document.getElementById("rollNo").value = i;
  alert("Enter data of a 3 students")
}

function displayAge() {
  var dob =  document.studentForm.dob.value;
  var d = new Date();
  var pYear = d.getFullYear();
  var pMonth = d.getMonth() + 1;
  var pDate = d.getDate();

  var ArrayDob = dob.split("-");
  if(!((pYear+""+pMonth+""+pDate)<(ArrayDob[0]+""+ArrayDob[1]+""+ArrayDob[2])))
  { document.getElementById("age").value =
  pYear -
  ArrayDob[0] +
  " Years," +
  (pMonth - ArrayDob[1]) +
  " Months , " +
  Math.abs(pDate - ArrayDob[2]) +
  " days";

  }
  else{
    document.getElementById("age").value =""
  }
 
}





function validateForm() {
  if (i <= 3) {
    console.log("value of i is :" + i);

    

    var firstName = document.studentForm.firstName.value;
    var lastName = document.studentForm.lastName.value;
    var dob = document.studentForm.dob.value;
    var age = document.studentForm.age.value;
    var email = document.studentForm.email.value;
    var gender = document.studentForm.gender.value;    
    var department = document.studentForm.cource.value;

    var obj = new student(i, firstName, lastName, dob, age, email, gender,department);
    ObjList[i - 1] = obj;

    document.getElementById("form").reset();

    if (i < 3) {
      document.getElementById("rollNo").value = i + 1;
    }
console.log("---------------")
    if (i == 3) {
      submitForm= display();
    }

    i = i + 1;
    return submitForm;
  }
  return submitForm;
}

function display() {
    var std1 = ObjList[0];
    var std2 = ObjList[1];
    var std3 = ObjList[2];
    alert("Roll Number : " +  std1.rollNo+"\n"+
    "Name : " +   std1.firstName+" "+ std1.lastName+"\n"+
    "DOB Name : "+      std1.dob+"\n"+
    "Age :"+            std1.age+"\n"+
    "Email : "+         std1.email+"\n"+
    "Gender: "+         std1.gender+"\n"+
    "Department : "+    std1.department+"\n"+
          "----------------------------------------\n"+
          "Roll Number : " +  std2.rollNo+"\n"+
          "Name : " +   std2.firstName+" "+ std2.lastName+"\n"+
          "DOB Name : "+      std2.dob+"\n"+
          "Age :"+            std2.age+"\n"+
          "Email : "+         std2.email+"\n"+
          "Gender: "+         std2.gender+"\n"+
          "Department : "+    std2.department+"\n"+
          "----------------------------------------\n"+
          "Roll Number : " +  std3.rollNo+"\n"+
          "Name : " +   std3.firstName+" "+ std3.lastName+"\n"+
          "DOB Name : "+      std3.dob+"\n"+
          "Age :"+            std3.age+"\n"+
          "Email : "+         std3.email+"\n"+
          "Gender: "+         std3.gender+"\n"+
          "Department : "+    std3.department+"\n"+
          "----------------------------------------\n"
          );
  
  return true;
}
