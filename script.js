let currentQuestion = 0;


const questions = [

"Do you love me? 💖",

"Do you miss me when I am not around? 🥺",

"Do you like our memories together? 📸",

"Do I make you happy? 😊",

"Do you enjoy my surprises? 🎁",

"Will you always support me? ❤️",

"Do you like spending time with me? 💕",

"Am I special to you? ✨",

"Do you want more beautiful memories with me? 🌸",

"Are you ready for your final surprise? 💌"

];



// PASSWORD

function checkPassword(){

let pass =
document.getElementById("password").value;


if(pass === "01012023"){
  document.getElementById("teddy").src="IMG_7852.png";





document.getElementById("music").play();


}

else{document.getElementById("teddy").src="IMG_7853.png";


document.getElementById("message").innerHTML =
"🥺 Teddy is crying... Wrong password 💔";


document.getElementById("characterReaction")
.innerHTML="😢";


}

}




// OPEN ENVELOPE

function openQuestions(){


document.getElementById("envelopePage")
.classList.add("hidden");


document.getElementById("questionPage")
.classList.remove("hidden");


showQuestion();


}




function showQuestion(){

document.getElementById("questionText")
.innerHTML =
questions[currentQuestion];

}




function yesAnswer(){

document.getElementById("characterReaction").innerHTML =
'<img src="IMG_7857.png" class="reaction-teddy">';


document.getElementById("reaction")
.innerHTML =
"Sending you a big hug & love 💕";





nextQuestion();

}




function noAnswer(){

document.getElementById("characterReaction").innerHTML =
'<img src="IMG_7853.png" class="reaction-teddy">';


document.getElementById("reaction")
.innerHTML=
"Teddy is crying 🥺";


nextQuestion();

}





function nextQuestion(){


currentQuestion++;


if(currentQuestion < questions.length){


setTimeout(()=>{

showQuestion();

},800);


}

else{


setTimeout(()=>{


document.getElementById("questionPage")
.classList.add("hidden");


document.getElementById("letterPage")
.classList.remove("hidden");


},1000);


}

}





// MEMORY PAGE

function showMemories(){


document.getElementById("letterPage")
.classList.add("hidden");


document.getElementById("memoryPage")
.classList.remove("hidden");


}





// GIFT PAGE

function showGift(){


document.getElementById("memoryPage")
.classList.add("hidden");


document.getElementById("giftPage")
.classList.remove("hidden");


}
