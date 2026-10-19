// JavaScript source code

// Add viewport and bootstrap links to the head element
var head = document.querySelector('head');

var viewport = '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
head.innerHTML += viewport;

var cssLink = '<link rel="stylesheet" type="text/css" href="./css/flex_style.css" />';
head.innerHTML += cssLink;

// var bootstrapLink1 = '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">';
// head.innerHTML += bootstrapLink1;

// var bootstrapLink2 = '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>';
// head.innerHTML += bootstrapLink2;

// Add HTML elements to the body element
// var bodies = document.getElementsByTagName('body');
// bodies[0].style.backgroundColor = 'lightgreen'; 

// Flex box
var body = document.querySelector('body');
body.style.backgroundColor = 'lightgreen';

var article = document.createElement('article');
article.className = 'flex-container';
body.appendChild(article);

var divHTML1 = 
  '<div class="item">' +
  '  <figure class="relative-container">' +
  '    <img class="same-size" src="./image/chatgpt.jpg" alt="chat gpt">' +
  '    <figcaption class="inner-text">Chat GPT</figcaption>' +
  '  </figure>' +
  '</div>';
  article.innerHTML += divHTML1;               

var divHTML2 = 
  '<div class="item">' +
  '  <figure class="relative-container">' +
  '    <img class="same-size" src="./image/gemini.jpg" alt="gemini">' +
  '    <figcaption class="inner-text">Gemini</figcaption>' +
  '  </figure>' +
  '</div>';
  article.innerHTML += divHTML2;   

var divHTML3 = '<div class="item"></div>';
article.innerHTML += divHTML3;

var divHTML4 = '<div class="item"></div>';
article.innerHTML += divHTML4;   

var divHTML5 = '<div class="item">Responsive design with Flexbox</div>';
article.innerHTML += divHTML5;   


// Functions for mouse events
var currentStyle;
function mouseEnter(obj) {
 currentStyle = obj.target.style; // Save current style
 obj.target.style = 'font: bold 9vw verdana; padding-left: 2vw; padding-right: 2vw; background-color: darkgreen;';
}
function mouseLeave(obj) {
 obj.target.style = currentStyle; // Set style back to current style
}
function mouseClick(obj) {
 obj.target.style = ' background-image: url(/image/bg1.jpg); background-size:cover; background-position:center; color: yellow; ';
}
var allDivs = document.getElementsByTagName('div');
var lastDiv = allDivs[4]; // the last div element

// Option 1: use addEventListener
lastDiv.addEventListener('mouseenter', mouseEnter);
lastDiv.addEventListener('mouseleave', mouseLeave);
lastDiv.addEventListener('mousedown', mouseClick);

var viewport = '<meta name="viewport" content="width=device-width,initial-scale=1.0">';
//////////////////////////
// ---------- Simple scroll-reveal without getBoundingClientRect ----------

// Get width and height of the viewport
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;
// Function to check if an element has entered the viewport
function isElementEnteringViewport(elem) {
  // 1. Calculate the bottom position of the viewport
  // window.scrollY = how far the page has been scrolled (from the top)
  // window.innerHeight = the height of the visible browser window
  // Together, scrollY + innerHeight = the pixel position of the bottom edge of the viewport
  var scrollBottom = window.scrollY + window.innerHeight;

  
  // 2. elem.offsetTop = the distance (in pixels) of the element from the top of the page
  // If the bottom of the viewport has passed the element's top,
  // it means the element has started entering the visible area.
  return scrollBottom >= elem.offsetTop;
}
// Scroll event handler
function onScroll() { 
  var divs = document.getElementsByTagName("div"); 
  for (var i = 0; i < divs.length; i++) 
    { if (isElementEnteringViewport(divs[i])) 
      { divs[i].style.backgroundColor = "yellow"; } 
      else { divs[i].style.backgroundColor = "red";

 } } }
  window.addEventListener("scroll", onScroll);


// additional: just changing the condition
  
  // function isElementEnteringViewport(elem) {
  // // 1. Calculate the bottom position of the viewport
  // // window.scrollY = how far the page has been scrolled (from the top)
  // // window.innerHeight = the height of the visible browser window
  // // Together, scrollY + innerHeight = the pixel position of the bottom edge of the viewport
  // var scrollBottom = window.scrollY + window.innerHeight;

  
  // // 2. elem.offsetTop = the distance (in pixels) of the element from the top of the page
  // // If the bottom of the viewport has passed the element's top,
  // // it means the element has started entering the visible area.
  // return scrollBottom >= elem.offsetTop;}