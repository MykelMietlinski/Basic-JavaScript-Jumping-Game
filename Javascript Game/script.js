var character = document.getElementById('character');
var fireballs = document.getElementById('fireballs');
var counter = 0; 
function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}

var checkDead = setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let fireballsLeft = parseInt(window.getComputedStyle(fireballs).getPropertyValue("left"));
    if(fireballsLeft<20 && fireballsLeft>-20 && characterTop>=130){
        fireballs.style.animation = "none";
        alert("Game Over!.. Your score is "+Math.floor(counter/100));
        counter = 0;
        fireballs.style.animation = "fireballs 1s infinite linear";
    }
    else{
        counter++;
        document.getElementById("scoreSpan").ineerHTML = Math.floor(counter/100);
    }
},10);
