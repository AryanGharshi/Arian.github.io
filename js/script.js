var height = window.innerHeight;
var selectedDescription = null;
var selectedDot = null;

/*toggles the visibility of descriptions in the skills section*/
function displayToggle(id) {
    var toggleView = document.getElementById(id);
    var toggleHide = document.getElementById(selectedDescription);

    if (selectedDescription != null && selectedDescription !== id) {

        toggleView.classList.toggle('fade');
        toggleHide.classList.toggle('fade');
        selectedDescription = id;

    } else if (selectedDescription === id) {

        toggleHide.classList.toggle('fade');
        selectedDescription = null;

    } else {

        toggleView.classList.toggle('fade');
        selectedDescription = id;
    }

}

/*highlights the correct dot based on which one is provided by scroll()*/
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

/* highlights a dot based on position of user */
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






