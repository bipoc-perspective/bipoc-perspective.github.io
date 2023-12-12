// type out BIPOC Perspectives

var i = 0;
var txt = 'BIPOC Perspectives';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

// open link 

function link(name) {
  window.open("/" + name + ".html");
}