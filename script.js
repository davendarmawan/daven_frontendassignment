// Modal Variables
var modal1 = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");
var modal3 = document.getElementById("modal3");

// Buttons
var btn1 = document.getElementById("button1");
var btn2 = document.getElementById("button2");
var btn3 = document.getElementById("button3");

// Close Buttons
var span1 = document.getElementById("span1");
var span2 = document.getElementById("span2");
var span3 = document.getElementById("span3");

// Open Film Informations
// Modal 1
button1.onclick = function() {
   modal1.style.display = "block";
}

// Modal 2
button2.onclick = function() {
    modal2.style.display = "block";
}

// Modal 3
button3.onclick = function() {
    modal3.style.display = "block";
}

// Closing Modal with Close Buttons
span1.onclick = function() {
    modal1.style.display = "none";
}

span2.onclick = function() {
    modal2.style.display = "none";
}

span3.onclick = function() {
    modal3.style.display = "none";
}

// Closing Modal when Clicking Outside of Modal
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }

    else if (event.target == modal2) {
        modal2.style.display = "none";
    }

    else if (event.target == modal3) {
        modal3.style.display = "none";
    }
}