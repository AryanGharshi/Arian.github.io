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
        document.getElementById('navbutton1').classList.remove('fade');
        document.getElementById('navbutton2').classList.remove('fade');
        document.getElementById('navbutton3').classList.remove('fade');
        /*
        document.getElementById('navbutton1').style.visibility = "visible";
        document.getElementById('navbutton2').style.visibility = "visible";
        document.getElementById('navbutton3').style.visibility = "visible";
        */
    }

    if (scroll >= (height*0.5) && scroll < (height*1.5)){
        highlight("nav2");

        document.getElementById('navbutton1').classList.add('fade');
        document.getElementById('navbutton2').classList.remove('fade');
        document.getElementById('navbutton3').classList.remove('fade');
        /*
        document.getElementById('navbutton1').style.visibility = "hidden";
        document.getElementById('navbutton2').style.visibility = "visible";
        document.getElementById('navbutton3').style.visibility = "visible";
        */
    }

    if (scroll >= (height*1.5)){
        highlight("nav3");

        document.getElementById('navbutton1').classList.remove('fade');
        document.getElementById('navbutton2').classList.add('fade');
        document.getElementById('navbutton3').classList.remove('fade');

        /*
        document.getElementById('navbutton1').style.visibility = "visible";
        document.getElementById('navbutton2').style.visibility = "hidden";
        document.getElementById('navbutton3').style.visibility = "visible";
        */
    }

    if (scroll >= (height*2.5)){
        highlight("nav4");

        document.getElementById('navbutton1').classList.remove('fade');
        document.getElementById('navbutton2').classList.remove('fade');
        document.getElementById('navbutton3').classList.add('fade');
        /*
        document.getElementById('navbutton1').style.visibility = "visible";
        document.getElementById('navbutton2').style.visibility = "visible";
        document.getElementById('navbutton3').style.visibility = "hidden";
        */
    }
}






