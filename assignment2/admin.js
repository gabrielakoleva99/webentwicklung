var myArray = ["Gabriela Koleva", "Hans Mueller", "Brigitte Zimmer"]
function listStudents() {
    myArray.forEach(el => {
        document.getElementById('result').innerHTML +=`<div>${el}</div><br />`;
    });

}

var myArray = ["Marco Hellig", "Jonas Mayers", "Sebastian Peters"]
function listStaff() {
    myArray.forEach(el => {
        document.getElementById('display').innerHTML +=`<div>${el}</div><br />`;
    });

}
