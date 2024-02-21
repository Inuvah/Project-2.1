var citylight = 80;
var starcontainer = document.getElementById("star-container");
for(var i = 0;i < citylight;i++){
    const star = document.createElement('img');
    star.setAttribute('class', 'star');
    star.src = '\img/starfigma.png';
    star.style.top = Math.floor(Math.random(2)*2600) + "px";
    star.style.right = Math.floor(Math.random(2)*2600) + "px";
    starcontainer.appendChild(star);
}

for(var j = 0;j < citylight; j++) {
    const starTwo = document.createElement('img');
    starTwo,setAttribute('class', 'starTwo');
    starTwo.src = '\img/starfigmatwo.png';
    starTwo.style.top = Math.floor(Math.random(2)*2800) + "px";
    starTwo.style.right = Math.floor(Math.random(2)*2800) + "px";
    starcontainer.appendChild(starTwo);
}