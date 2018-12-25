var height = window.innerHeight;
var selectedDescription;


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





