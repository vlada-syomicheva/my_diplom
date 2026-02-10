document.querySelector(".burger").onclick = function() {
    document.querySelector(".nav-menu").classList.toggle("mobile-active");
}

document.querySelector('#closeBtn').onclick = function() {
    document.querySelector('.nav-menu').classList.remove('mobile-active');
}


document.querySelector(".volume-btn").onclick = function() {
    document.querySelector(".volume-btn").classList.toggle("active");
}

document.querySelector(".video-container").onclick = function() {
    document.querySelector(".video-container").classList.toggle("muted");
}

document.querySelector(".btn-continue").onclick = function() {
    document.querySelector(".card-contact").classList.toggle("hidden");
    document.querySelector(".card-counter").classList.toggle("hidden");
}



//counter-container

const rangeInput = document.getElementById('range4');
const rangeOutput = document.getElementById('rangeValue');

rangeOutput.textContent = rangeInput.value;

rangeInput.addEventListener('input', function() {
rangeOutput.textContent = this.value;
});

//btns-counter-container 

//document.getElementById("my-btn-1").addEventListener("mousedown", () => {
   // document.getElementById("my-btn-1").classList.add("active");
//});

//document.getElementById("my-btn-1").addEventListener("mouseup", () => {
   // document.getElementById("my-btn-1").classList.remove("active");
//});

//document.getElementById("my-btn-1").addEventListener("mouseleave", () => {
   // document.getElementById("my-btn-1").classList.remove("active");
//});

document.getElementById("my-btn-1").addEventListener("click", function(){
    document.getElementById("my-btn-1").classList.toogle("active");
});