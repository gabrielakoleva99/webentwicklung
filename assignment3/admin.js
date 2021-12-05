let students = [{id: 1234, firstname: 'Gabriela', lastname: 'Koleva', birth: '09.01.1999', joined: '05.04.2018',
gender: 'female', department: 'School of Computing, Communication and Business', email: 'gabriela@gmail.com'},
{id: 4321, firstname: 'Veronika', lastname: 'Dimitrova', birth: '29.10.1999', joined: '15.09.2018',
gender: 'female', department: 'School of Computing, Communication and Business', email: 'veronika@gmail.com'},
{id: 4729, firstname: 'Hans', lastname: 'Peterson', birth: '09.12.1999', joined: '05.04.2019',
gender: 'male', department: 'School of Design and Culture', email: 'hans@gmail.com'},
{id: 1839, firstname: 'Jonas', lastname: 'Mueller', birth: '29.11.1996', joined: '01.09.2021',
gender: 'male', department: 'HTW Berlin Business School', email: 'jonas@gmail.com'}];

function listStudents() {
    students.forEach(el => {
        document.getElementById('result').innerHTML +=`<div>${el.id + '\t' + el.firstname + '\t' + el.lastname + '\t' 
    +el.birth + '\t' + el.joined + '\t' + el.gender + '\t' + el.department + '\t' + el.email}</div><br />`;
    });

}
function showSelectedDepartment(){
    let arr = [];
   var a = document.getElementById('departments').value;
   if(a==="School of Engineering – Energy and Information"){
    arr = students.filter(function (e) {
            return e.department==="School of Engineering – Energy and Information";
            }); 
   } else if(a=="School of Engineering – Technology and Life"){
    students.filter(function (e) {
        return e.department=="School of Engineering – Technology and Life";
        }); 
   }else if(a=="HTW Berlin Business School"){
    students.filter(function (e) {
        return e.department=="HTW Berlin Business School";
        }); 
   }else if(a==="School of Computing, Communication and Business"){
    // arr= students.filter(function (e) {
    //     return  e.department==="School of Computing, Communication and Business";
    //     }); 
    //     console.log(arr);
    const found = students.find( ({ department }) => department === 'School of Computing, Communication and Business' );
    console.log(found);

   }else if(a=="School of Design and Culture"){
    arr = students.filter(student => student.department == "School of Design and Culture");
   }
   arr.forEach(el => {
    document.getElementById('output').innerHTML +=`<div>${el.id + '\t' + el.firstname + '\t' + el.lastname + '\t' 
+el.birth + '\t' + el.joined + '\t' + el.gender + '\t' + el.department + '\t' + el.email}</div><br />`;
});
   console.log(arr);


function filterStudents(){
    var filters = document.getElementById("departments");

}

var myArray = ["Marco Hellig", "Jonas Mayers", "Sebastian Peters"]
function listStaff() {
    myArray.forEach(el => {
        document.getElementById('display').innerHTML +=`<div>${el}</div><br />`;
    });

}

function validateDOB(){
    if(document.getElementById('dob').value==''){
      alert('Please select a date')
      return false
    }
    var dob=document.getElementById('dob').value
    console.log(dob)
      var today = new Date();
      var birthDate = new Date(dob);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
      }
     if(age<17 || age>60){
        alert('Invalid Date of Birth. Age should be above 17 and under 60...!!!')
     }
  }

  function validateJD(){
    if(document.getElementById('jd').value==''){
      alert('Please select a date')
      return false
    }
    var js=document.getElementById('jd').value
    console.log(jd)
      var today = new Date();
      var joinDate = new Date(jd);
}
}
