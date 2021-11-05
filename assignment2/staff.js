var myArray = ["Gabriela Koleva", "Hans Mueller", "Brigitte Zimmer"]
function listStudents() {
    myArray.forEach(el => {
        document.getElementById('result').innerHTML +=`<div>${el}</div><br />`;
    });

}