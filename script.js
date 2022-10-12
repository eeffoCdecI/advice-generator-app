const API_URL = "https://api.adviceslip.com/advice";

const adviceEl = document.querySelector(".advice");
const adviceIdEl = document.querySelector(".advice-id");
const diceEl = document.querySelector(".dice");

const fetchAdviceFromApi = () => {
    fetch(API_URL)
        .then((res) => res.json())
        .then((adviceObj) => renderAdvice(adviceObj));
};

diceEl.addEventListener("click", fetchAdviceFromApi);

const renderAdvice = (adviceObj) => {
    adviceEl.textContent = `“${adviceObj.slip.advice}”`;
    adviceIdEl.textContent = `Advice #${adviceObj.slip.id}`;
}