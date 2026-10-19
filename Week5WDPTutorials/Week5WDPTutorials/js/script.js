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
var bodies = document.getElementsByTagName('body');
bodies[0].style.backgroundColor = 'lightgreen'; 

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
