var citylight = 40;
var starcontainer = document.getElementById("star-container");
for(var i = 0;i < citylight;i++){
    const star = document.createElement('img');
    star.setAttribute('class', 'star');
    star.src = '\img/starfigma.png';
    star.style.top = Math.floor(Math.random(2)*2600) + "px";
    star.style.right = Math.floor(Math.random(2)*2600) + "px";
    starcontainer.appendChild(star);
}