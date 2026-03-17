
export function generateNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

export function checkGuess(secret, guess) {
    if (guess === secret) return "correct";
    if (guess > secret) return "high";
    return "low";
}