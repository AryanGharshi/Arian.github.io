var height = window.innerHeight;
var selectedDescription = null;
var selectedDot = null;


function move(name) {
    var integer = parseInt(name) + 1;

    var scroll = integer * height;
    window.scrollTo(0, scroll);
}

function displayToggle(id) {

    if (selectedDescription != null && selectedDescription !== id) {
        document.getElementById(id).style.display = "block";
        document.getElementById(selectedDescription).style.display = "none";
        selectedDescription = id;
        console.log("closed previously selected description. new one: " + selectedDescription);

    } else if (selectedDescription === id) {
        document.getElementById(selectedDescription).style.display = "none";
        selectedDescription = null;
        console.log("you clicked on an already showing description. I closed it. new selected: " + selectedDescription);

    } else {
        document.getElementById(id).style.display = "block";
        selectedDescription = id;
        console.log("no previously selected description. new one: " + selectedDescription);
    }
}

function highlight(id) {
    if (selectedDot !== null && selectedDot !== id) {
        document.getElementById(selectedDot).style.backgroundColor = 'transparent';
        document.getElementById(id).style.backgroundColor = "#60e8e8";
        selectedDot = id;
    } else {
        document.getElementById(id).style.backgroundColor = "#60e8e8";
        selectedDot = id;
    }


}




