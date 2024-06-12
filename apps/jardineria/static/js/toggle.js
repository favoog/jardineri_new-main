let label = document.getElementById("label");
var toggle = document.getElementById('container');
var body = document.querySelector('body');

toggle.onclick = function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    label.classList.add("bg-light");
}
