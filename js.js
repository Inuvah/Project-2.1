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
    document.getElementById("body").classList.toggle("darkmode");
    document.getElementById("star-container").classList.toggle("show");
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

