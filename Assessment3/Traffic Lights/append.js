let a = document.getElementById("p1");
let b = document.getElementById("p2");
let c = document.getElementById("p3");

function stop()
{
    a.style.backgroundColor="red";
    b.style.backgroundColor="white";
    c.style.backgroundColor="white";
}
function wait()
{
    a.style.backgroundColor="white";
    b.style.backgroundColor="yellow";
    c.style.backgroundColor="white";
}
function start()
{
    a.style.backgroundColor="white";
    b.style.backgroundColor="white";
    c.style.backgroundColor="green";
}