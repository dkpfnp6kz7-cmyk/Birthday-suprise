function start(){

document.querySelector(".intro").style.display="none";
document.querySelector(".gallery").style.display="block";

const images=document.querySelectorAll(".gallery img");

let i=0;

function showNext(){

if(i>0){
images[i-1].style.display="none";
}

if(i<images.length){

images[i].style.display="block";

setTimeout(()=>{
images[i].classList.add("show");
},100);

i++;

setTimeout(showNext,3000);

}else{

document.querySelector(".gallery").style.display="none";
document.querySelector(".message").style.display="flex";

}

}

images.forEach(img=>{
img.style.display="none";
});

showNext();

}

for(let i=0;i<50;i++){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"%";

heart.style.animationDuration=(5+Math.random()*5)+"s";

heart.style.fontSize=(20+Math.random()*20)+"px";

heart.style.animationDelay=Math.random()*5+"s";

document.getElementById("hearts").appendChild(heart);

}
