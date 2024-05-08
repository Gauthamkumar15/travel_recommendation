var submitForm = function(event) {
    event.preventDefault();
};

var homeDiv = document.getElementById("home");
var aboutDiv = document.getElementById("about");
var contactDiv = document.getElementById("contact");

var turnHomeOn =function() {
    homeDiv.classList.add("home-visible");
    homeDiv.classList.remove("home-not-visible");
    aboutDiv.classList.add("about-not-visible");
    aboutDiv.classList.remove("about-visible");
    contactDiv.classList.add("contact-not-visible");
    contactDiv.classList.remove("contact-visible");
};

var turnAboutOn =function() {
    homeDiv.classList.add("home-not-visible");
    homeDiv.classList.remove("home-visible");
    aboutDiv.classList.add("about-visible");
    aboutDiv.classList.remove("about-not-visible");
    contactDiv.classList.add("contact-not-visible");
    contactDiv.classList.remove("contact-visible");
};

var turnContactOn =function() {
    homeDiv.classList.add("home-not-visible");
    homeDiv.classList.remove("home-visible");
    aboutDiv.classList.add("about-not-visible");
    aboutDiv.classList.remove("about-visible");
    contactDiv.classList.add("contact-visible");
    contactDiv.classList.remove("contact-not-visible");
};

turnHomeOn();