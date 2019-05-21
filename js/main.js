/*add enter listener*/
window.addEventListener("keypress", checkIfEnter, false);
function checkIfEnter(key) {
    if (key.keyCode == "13") {
        check_If_Ok();
    }
}

var first = localStorage.getItem('firstName');
var last = localStorage.getItem('lastName');


if (first != null || last != null) {
    window.location.href = 'page5.html';
}



/*the main function*/
function check_If_Ok() {
    localStorage.clear();
    var value = document.getElementById('input').value;
    var value2 = document.getElementById('input2').value;

 
    if(value===null)
    {
        localStorage.setItem('firstName', ' ');
        alert("fisrt name");
    }
    if(value2===null)
    {
        localStorage.setItem('lastName', ' ');
        alert("last name");

    }
    localStorage.setItem('firstName', value);
    localStorage.setItem('lastName', value2);
    
    window.location.href = 'page5.html';


}