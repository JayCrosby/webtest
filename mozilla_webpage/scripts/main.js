//Logo change on click script
var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute ('src');
    if (mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/chrome-logo.png');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

//Fetch variable information
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

//Create username function
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Better use Chrome, ' + myName;
}

//Checks if username is created, if not runs setUserName function
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Better use Chrome, ' + storedName;
}

//Change username
myButton.onclick = function() {
  setUserName();
}
