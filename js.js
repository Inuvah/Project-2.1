//Star amount dispersed at random
var citylight = 600;
var click = 0;
var starcontainer = document.getElementById("star-container");
//Text size slider
const fontSizeSlider = document.getElementById("font-size-slider");
const displayText = document.getElementById("display-text");
fontSizeSlider.addEventListener("input", () => {
  const fontSize = fontSizeSlider.value;
  displayText.style.fontSize = `${fontSize}px`;
});
//nav accesibility drop down
function dropFunctionOne() {
    document.getElementById("dropdown").classList.toggle("show");
}
//Computer animation onClick
function fullScreen(){
  document.getElementById("fullScreen").classList.toggle("fullScreenAnim");
}
//Darkmode button && generate stars
function darkmodeFunction() {
  click++;
  console.log(click);
    document.getElementById("star-container").classList.toggle("show");
    document.getElementById("body").classList.toggle("darkmode");
    document.getElementById("display-text").classList.toggle("dark-text");
    if(click == 1){
    for(var i = 0;i < citylight;i++){
      const star = document.createElement('img');
      star.setAttribute('class', 'star');
      star.setAttribute('id', 'star');
      star.src = '\img/starfigma.png';
      star.style.top = Math.floor(Math.random(0)*2600) + "px";
      star.style.right = Math.floor(Math.random(0)*2600) + "px";
      starcontainer.appendChild(star);

      const starTwo = document.createElement('img');
      starTwo.setAttribute('class', 'star');
      starTwo.setAttribute('id', 'starTwo');
      starTwo.src = '\img/starfigmaTwo.png';
      starTwo.style.top = Math.floor(Math.random(2)*2900) + "px";
      starTwo.style.right = Math.floor(Math.random(2)*2900) + "px";
      starcontainer.appendChild(starTwo);
    } 
  }else if(click == 2){
    for(var i = 0;i < citylight;i++){
      const daytime = document.getElementById("star");
      const daytimeTwo = document.getElementById("starTwo");
      daytime.remove();
      daytimeTwo.remove();
    }
    click = 0;
  }
}
//Info Grow
function CO2BubbleFunction() {
    document.getElementById("CO2-secondP").classList.toggle("show");
    document.getElementById("CO2-firstP").classList.toggle("show");
}
//Burger Menu
function burgerFunction(){
  document.getElementById("burger-menu").classList.toggle("show");
  console.log("I have been clicked");
}
window.onclick = function(event) {
  if (!event.target.matches('.input-button')) {
    var dropdowns = document.getElementsByClassName("dropdown-link");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
window.onclick = function(event) {
  if (!event.target.matches('.burger-button')) {
    var dropdowns = document.getElementsByClassName("burger-menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);