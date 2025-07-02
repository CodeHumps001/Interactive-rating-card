let cardContent = document.querySelector(".card-container");
let feedback = document.querySelector(".feedback-container");
let subM = document.getElementById("sub");
let btnElement = document.querySelectorAll(".btn");
let rate = document.getElementById("rate");

btnElement.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    rate.innerHTML = index + 1;

    btnElement.forEach((b) => b.classList.remove("active"));
    btnElement[index].classList.add("active");
  });
});

subM.addEventListener("click", () => {
  cardContent.classList.add("hidden");
  feedback.classList.remove("hidden");
});
