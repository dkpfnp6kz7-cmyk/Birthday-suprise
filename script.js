const intro = document.getElementById("intro");
const countdown = document.getElementById("countdown");
const celebrate = document.getElementById("celebrate");
const gallery = document.getElementById("gallery");
const letter = document.getElementById("letter");
const end = document.getElementById("end");

const startBtn = document.getElementById("startBtn");
const number = document.getElementById("number");
const slide = document.getElementById("slide");
const typing = document.getElementById("typing");

const photos = [
"images/photo1.JPG",
"images/photo2.JPG",
"images/photo3.JPG",
"images/photo4.JPG",
"images/photo5.JPG",
"images/photo6.JPG",
"images/photo7.JPG",
"images/photo8.JPG"
];

const message = `Happy Birthday Omosa ❤️

Today is your special day.

I hope this year brings you happiness,
success,
peace,
beautiful memories,
and endless reasons to smile.

Thank you for being such an amazing person.

Never stop believing in yourself.

Keep smiling.

❤️

With Love,

Maji`;

startBtn.onclick = () => {

intro.style.display = "none";
countdown.style.display = "flex";

let count = 5;

number.innerHTML = count;

const timer = setInterval(() => {

count--;

if(count > 0){

number.innerHTML = count;

}else{

clearInterval(timer);

countdown.style.display = "none";
celebrate.style.display = "flex";

setTimeout(() => {

celebrate.style.display = "none";

showGallery();

},3000);

}

},1000);

};

function showGallery(){

gallery.style.display = "flex";

let current = 0;

slide.src = photos[current];

const slideshow = setInterval(() => {

current++;

if(current >= photos.length){

clearInterval(slideshow);

gallery.style.display = "none";

showLetter();

return;

}

slide.style.opacity = 0;

setTimeout(() => {

slide.src = photos[current];

slide.style.opacity = 1;

},500);

},3000);

}

function showLetter(){

letter.style.display = "flex";

let i = 0;

const type = setInterval(() => {

typing.innerHTML += message.charAt(i);

i++;

if(i >= message.length){

clearInterval(type);

setTimeout(() => {

letter.style.display = "none";

end.style.display = "flex";

},4000);

}

},40);

}

// Floating Hearts

const hearts = document.getElementById("hearts");

setInterval(() => {

const heart = document.createElement("div");

heart.className = "heartFloat";

heart.innerHTML = "❤️";

heart.style.left = Math.random()*100 + "%";

heart.style.fontSize = (20 + Math.random()*25) + "px";

heart.style.animationDuration = (5 + Math.random()*5) + "s";

hearts.appendChild(heart);

setTimeout(() => {

heart.remove();

},10000);

},300);
