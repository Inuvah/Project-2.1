//Star amount dispersed at random
var citylight = 80;
var click = 0;
var starcontainer = document.getElementById("star-container");

const fontSizeSlider = document.getElementById("font-size-slider");
const displayText = document.getElementById("display-text");

fontSizeSlider.addEventListener("input", () => {
  const fontSize = fontSizeSlider.value;
  displayText.style.fontSize = `${fontSize}px`;
});

function dropFunctionOne() {
    document.getElementById("dropdown").classList.toggle("show");
}

function darkmodeFunction() {
  click++;
    document.getElementById("star-container").classList.toggle("show");
    document.getElementById("body").classList.toggle("darkmode");
    if(click == 1){
    for(var i = 0;i < citylight;i++){
      const star = document.createElement('img');
      star.setAttribute('class', 'star');
      star.setAttribute('id', 'star');
      star.src = '\img/starfigma.png';
      star.style.top = Math.floor(Math.random(2)*2600) + "px";
      star.style.right = Math.floor(Math.random(2)*2600) + "px";
      starcontainer.appendChild(star);
    } 
    console.log(click);
  }else if(click == 2){
    for(var i = 0;i < citylight;i++){
      const daytime = document.getElementById("star");
       daytime.remove();
    }
    click = 0;
  }
  
  console.log(click);
}

function CO2BubbleFunction() {
    document.getElementById("CO2-secondP").classList.toggle("show");
    document.getElementById("CO2-firstP").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.input-button')) {
      var dropdowns = document.getElementsByClassName("dropdown-one");
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