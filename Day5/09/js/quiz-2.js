var radius = document.querySelector("#radius");
var btn = document.querySelector("#start");
var round = document.querySelector("#round");
var area = document.querySelector("#area");

btn.onclick = function(){
    round.value = radius.value * 2 * Math.PI;
    area.value = radius.value * radius.value * Math.PI;
}