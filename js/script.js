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
    }

    if (scroll >= (height*0.5) && scroll < (height*1.5)){
        highlight("nav2");

        document.getElementById('navbutton1').classList.add('fade');
        document.getElementById('navbutton2').classList.remove('fade');
        document.getElementById('navbutton3').classList.remove('fade');
    }

    if (scroll >= (height*1.5)){
        highlight("nav3");

        document.getElementById('navbutton1').classList.remove('fade');
        document.getElementById('navbutton2').classList.add('fade');
        document.getElementById('navbutton3').classList.remove('fade');
    }

    if (scroll >= (height*2.5)){
        highlight("nav4");

        document.getElementById('navbutton1').classList.remove('fade');
        document.getElementById('navbutton2').classList.remove('fade');
        document.getElementById('navbutton3').classList.add('fade');
    }
}

function toggleModal(projectId) {
    var modal = document.getElementById(projectId);
    var id = projectId.substring(7, projectId.length);

    if (modal.style.display === "flex") {
        modal.style.display = "none";
    } else {
        modal.style.display = "flex";
        setInterval(slideshow(id), 2000);
    }
}
var init = 0;
function slideshow(slideShowId) {
    var slide = document.getElementById("slideshow" + slideShowId); //this should be correct.
    var interval = init % 3;


    console.log("hiding: " + interval);
    slide.children[interval].style.display = "none";
    init++;
    console.log("displaying: " + interval);
    slide.children[interval].style.display = "block";
}






