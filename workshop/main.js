const slider = document.querySelector('.slider');
const nextButton = document.querySelector('.next-btn');
const prevButton = document.querySelector('.prev-btn');
const teamMembers = document.querySelectorAll('.team-member');
const inputBTN = document.querySelector('.submit-btn');
const emailInput = document.querySelector('.email-input');
const invalidEmail = document.querySelector('.invalid-email');
let index = 0;

nextButton.addEventListener('click', () => {
    if (index < teamMembers.length - 1) {
        index++;
        slider.style.transform = `translateX(-${index * 100}%)`;
    } else {
        index = 0;
        slider.style.transform = `translateX(0)`;
    }
});

prevButton.addEventListener('click', () => {
    if (index > 0) {
        index--;
        slider.style.transform = `translateX(-${index * 100}%)`;
    } else {
        index = teamMembers.length - 1;
        slider.style.transform = `translateX(-${index * 100}%)`;
    }
});

inputBTN.addEventListener('click', () => {
    if (!emailInput.value.includes('@')) {
        invalidEmail.style.display = "block";
        emailInput.style.border = "1px solid red";
        emailInput.style.color = "red";
    } else {
        invalidEmail.style.display = "none";
        emailInput.style.color = "black";
        emailInput.style.border = "none";
    }
});

emailInput.addEventListener('input', () => {
    if (emailInput.value === "") {
        invalidEmail.style.display = "none";
        emailInput.style.color = "black";
        emailInput.style.border = "none";
    }
});