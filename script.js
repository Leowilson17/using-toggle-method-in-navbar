var click = document.querySelector('.navbar');
console.log(click);

click.addEventListener('click', function(){
var navDisplay = document.querySelector('.link');
// Toggle between adding and removing a class name from an element with JavaScript.
navDisplay.classList.toggle('display');
});