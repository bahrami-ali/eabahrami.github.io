
import $ from 'jquery';


$(".button").on('click',
  (function() {
    $(this).toggleClass("play").toggleClass("paused")
  })
);


//// Define listener for each member of the crew


//// Ali

const ali = document.getElementById("ali") // Get DOM
ali.addEventListener("mouseenter", () => showINFO(ali)) // get Listener for mouse hover
ali.addEventListener("mouseleave", () => hideINFO(ali)) // get Listener for mouse leave


///// Aayush

const aayush = document.getElementById("aayush") // Get DOM
aayush.addEventListener("mouseenter", () => showINFO(aayush)) // get Listener for mouse hover
aayush.addEventListener("mouseleave", () => hideINFO(aayush)) // get Listener for mouse leave

//// Alia

const alia = document.getElementById("alia") // Get DOM
alia.addEventListener("mouseenter", () => showINFO(alia)) // get Listener for mouse hover
alia.addEventListener("mouseleave", () => hideINFO(alia)) // get Listener for mouse leave



// show the crew information upon the hover of the mouse
const showINFO = (elem) => {
    const crewInfo = elem.getElementsByClassName("crewInfo")[0]
    const imageContainer = elem.getElementsByClassName("crewImage")[0]
    crewInfo.style.display = "block"
}

// Remove crew information display
const hideINFO = (elem) => {
    const crewInfo = elem.getElementsByClassName("crewInfo")[0]
    const imageContainer = elem.getElementsByClassName("crewImage")[0]
    crewInfo.style.display = "none"
}
