var height = window.innerHeight;



/*toggles the visibility of descriptions in the skills section*/
var selectedDescription = null;
var showing = false;

function displayToggle(id) {
    var desc = document.getElementById(id);

    if (showing === false){
        selectedDescription = desc;
        selectedDescription.classList.add("fadeIn");
        showing = true;
    }
    else if (selectedDescription === desc) {
        selectedDescription.classList.remove("fadeIn");
        selectedDescription.classList.add("fadeOut");
        showing = false;
    }
    else {
        selectedDescription.classList.remove("fadeIn");
        selectedDescription.classList.add("fadeOut");
        desc.classList.add("fadeIn");
        selectedDescription = desc;
    }
}

/*highlights the correct dot based on which one is provided by scroll()*/

var selectedDot = null;
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

        /*deselects any description that may be open after scrolling past projects section*/
        if (selectedDescription != null) {
            displayToggle(selectedDescription);
        }
    }

    if (scroll >= (height*2.5)){
        highlight("nav4");

        document.getElementById('navbutton1').classList.remove('fade');
        document.getElementById('navbutton2').classList.remove('fade');
        document.getElementById('navbutton3').classList.add('fade');
    }
}


/*displays and hides the modal window */
var slide;
var modalActive = false;
var projectId = null;

function toggleModal(id) {
    projectId = id;
    var modal = document.getElementById(projectId);
    var slideId = projectId.substring(7, projectId.length);

    if (modal.style.display === "flex") {
        modal.style.display = "none";
        clearInterval(slide);
        modalActive=false;
    } else {
        modal.style.display = "flex";
        slideshow(slideId)
        slide = setInterval( function() { slideshow(slideId); }, 2000 );
        modalActive = true;
    }
}

/*runs the slideshow in the modal  box*/
var init = null;

function slideshow(slideShowId) {
    var slide = document.getElementById("slideshow" + slideShowId); //this should be correct.
    var pointer = init % 3; //0

    if (init == null){
        slide.children[pointer].style.display = "block";
        init = 0;
    } else{
        slide.children[pointer].style.display = "none";
        init++;
        pointer = init % 3;
        slide.children[pointer].style.display = "block";
    }
}

/*active modal box is closed */
document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode === 27) {
        if (modalActive === true) {
            toggleModal(projectId);
        }
    }
};





