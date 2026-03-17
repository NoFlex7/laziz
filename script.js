import { generateNumber, checkGuess } from "./module.js";

let secretNumber = generateNumber();

const input = document.getElementById("guess");
const message = document.getElementById("message");

document.getElementById("check").addEventListener("click", () => {
    const guess = Number(input.value);

    if (!guess) {
        message.textContent = "❗ Son kiriting!";
        return;
    }

    const result = checkGuess(secretNumber, guess);

    if (result === "correct") {
        message.textContent = "🎉 To‘g‘ri topding!";
    } else if (result === "high") {
        message.textContent = "📉 Juda katta!";
    } else {
        message.textContent = "📈 Juda kichik!";
    }
});

document.getElementById("restart").addEventListener("click", () => {
    secretNumber = generateNumber();
    message.textContent = "🔄 Yangi o‘yin boshlandi!";
    input.value = "";
});