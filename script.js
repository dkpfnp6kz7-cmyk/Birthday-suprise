const intro = document.querySelector(".intro");
const gallery = document.querySelector(".gallery");
const message = document.querySelector(".message");

const images = document.querySelectorAll(".gallery img");

gallery.style.display = "none";
message.style.display = "none";

function start() {

intro.style.display = "none";
gallery.style.display = "flex";

let current = 0;

images.forEach((img, index)=>{
img.style.display = index===0 ? "block":"none";
});

const slide = setInterval(()=>{

images[current].style.display="none";

current++;

if(current>=images.length){

clearInterval(slide);

gallery.style.display="none";

message.style.display="flex";

return;

}

images[current].style.display="block";

},3000);

}

document.getElementById("startBtn").onclick = start;

// Floating Hearts

const hearts=document.getElementById("hearts");

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.className="heartFloat";

heart.style.left=Math.random()*100+"%";

heart.style.fontSize=(18+Math.random()*25)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";

hearts.appendChild(heart);

setTimeout(()=>heart.remove(),9000);

},400);
