let a = document.getElementById("img1");
let b = document.getElementById("img2");
let c = document.getElementById("p1");
let d = document.getElementById("btn1");
let e = document.getElementById("btn2");


function on()
{
    a.src="bulbon.jpeg";
    b.src="cat.jpeg";
    c.textContent="Switch ON";
    d.style.backgroundColor="green";
    e.style.backgroundColor="grey";
}
function off()
{
    a.src="darkblub.jpeg";
    b.src="dcat.jpeg";
    c.textContent="Switch OFF";
    d.style.backgroundColor="grey";
    e.style.backgroundColor="red";
}