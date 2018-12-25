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

    } else if (selectedDescription === id) {
        document.getElementById(selectedDescription).style.display = "none";
        selectedDescription = null;

    } else {
        document.getElementById(id).style.display = "block";
        selectedDescription = id;
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

function scroll() {
    var scroll = (window.pageYOffset || document.scrollTop)  - (document.clientTop || 0);

    if (scroll < (height*0.5)){
        highlight("nav1");
    }

    if (scroll >= (height*0.5)){
        highlight("nav2");
    }

    if (scroll >= (height*1.5)){
        highlight("nav3");
    }

    if (scroll >= (height*2.5)){
        highlight("nav4");
    }


}




