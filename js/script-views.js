document.querySelector(".burger").onclick = function() {
    document.querySelector(".nav-menu").classList.toggle("mobile-active");
}

document.querySelector('#closeBtn').onclick = function() {
    document.querySelector('.nav-menu').classList.remove('mobile-active');
}

//
const rangeInput = document.getElementById('range4-1');
const rangeOutput = document.getElementById('rangeValue-1');

rangeOutput.textContent = rangeInput.value;

rangeInput.addEventListener('input', function() {
    rangeOutput.textContent = this.value;
});

document.querySelector(".btn-continue").onclick = function() {
    document.querySelector(".card-contact").classList.toggle("hidden");
    document.querySelector(".card-counter").classList.toggle("hidden");
}