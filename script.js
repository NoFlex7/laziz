import { generateNumber, checkGuess } from "./module.js";

let secretNumber = generateNumber();

const input = document.getElementById("guess");
const message = document.getElementById("message");
const checkBtn = document.getElementById("check");
const restartBtn = document.getElementById("restart");

// CHECK BUTTON
checkBtn.addEventListener("click", () => {
    const guess = Number(input.value);

    // ✅ FIXED validation
    if (input.value === "" || guess < 1 || guess > 100) {
        message.textContent = "❗ 1 dan 100 gacha son kiriting!";
        return;
    }

    const result = checkGuess(secretNumber, guess);

    if (result === "correct") {
        message.textContent = "🎉 To‘g‘ri topding!";
        input.disabled = true; // optional improvement
    } else if (result === "high") {
        message.textContent = "📉 Juda katta!";
    } else {
        message.textContent = "📈 Juda kichik!";
    }
});

// RESTART BUTTON
restartBtn.addEventListener("click", () => {
    secretNumber = generateNumber();
    message.textContent = "🔄 Yangi o‘yin boshlandi!";
    input.value = "";
    input.disabled = false;
});
