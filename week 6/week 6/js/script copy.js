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
article.className = 'container';
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

// Mouse event handlers
var currentStyle;
function mouseEnter(obj) {
  currentStyle = obj.target.style;
  obj.target.style = 'font: bold 9vw verdana; padding-left: 2vw; padding-right: 2vw; background-color: darkgreen;';
}

function mouseLeave(obj) {
  obj.target.style = currentStyle;
}

function mouseClick(obj) {
  obj.target.style = 'background-color: none; background-image: url(../image/bg1.jpg); background-size:cover; background-position:center; color: yellow; ';
}

var allDivs = document.getElementsByTagName('div');
var lastDiv = allDivs[4];
// Option 1: use addEventListener
lastDiv.addEventListener('mouseenter', mouseEnter);
lastDiv.addEventListener('mouseleave', mouseLeave);
lastDiv.addEventListener('mousedown', mouseClick);

// var newClass = 
//    '.gradient-color {' +
//    '   background: linear-gradient(to top, brown, lightgrey, navy);' +
//    '}';

// article.classList.remove('container');

// Option 2: use event attribute
// lastDiv.onmouseenter = mouseEnter;

// Bootstrap
// var body = document.querySelector('body');
// body.style.backgroundColor = 'lightgreen';

// var article = document.createElement('article');
// article.className = 'container-fluid';
// body.appendChild(article);


// var div = document.createElement('div');
// div.className = 'row';
// article.appendChild(div);

// var divHTML1 = 
//   '<div class="item1 col-md-4 col-sm-4 col-12">' +
//   '  <figure class="relative-container">' +
//   '    <img class="same-size" src="./image/chatgpt.jpg" alt="chat gpt">' +
//   '    <figcaption class="inner-text">Chat GPT</figcaption>' +
//   '  </figure>' +
//   '</div>';
// div.innerHTML += divHTML1;               

// var divHTML2 = 
//   '<div class="item2 col-md-8 col-sm-8 col-12">' +
//   '  <figure class="relative-container">' +
//   '    <img class="same-size" src="./image/gemini.jpg" alt="gemini">' +
//   '    <figcaption class="inner-text">Gemini</figcaption>' +
//   '  </figure>' +
//   '</div>';
// div.innerHTML += divHTML2;   

// var divHTML3 = '<div class="item3 col-md-8 col-sm-8 col-12"></div>';
// div.innerHTML += divHTML3;

// var divHTML4 = '<div class="item4 col-md-4 col-sm-4 col-12"></div>';
// div.innerHTML += divHTML4;   

// var divHTML5 = '<div class="item5 col-md-12 col-sm-12 col-12">Responsive design using Bootstrap</div>';
// div.innerHTML += divHTML5;   

