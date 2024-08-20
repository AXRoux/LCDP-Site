document.addEventListener('DOMContentLoaded', () => {
    const codeDisplay = document.getElementById('code-display');
    const feedback = document.getElementById('feedback');
    const timer = document.getElementById('timer');
    const keypad = document.getElementById('keypad');
    const submitButton = document.getElementById('submit');
    const message = document.getElementById('message');

    let timeLeft = 120;
    let secretCode = generateSecretCode();
    let currentGuess = '';
    let attempts = 0;
    let gameOver = false;

    function generateSecretCode() {
        let code = '';
        for (let i = 0; i < 4; i++) {
            code += Math.floor(Math.random() * 10);
        }
        return code;
    }

    function updateDisplay() {
        codeDisplay.textContent = currentGuess.padEnd(4, '0');
    }

    function updateTimer() {
        timer.textContent = timeLeft;
        if (timeLeft === 0) {
            endGame(false);
        }
    }

    function provideFeedback(guess) {
        let correctDigits = 0;
        let correctPositions = 0;

        for (let i = 0; i < 4; i++) {
            if (guess[i] === secretCode[i]) {
                correctPositions++;
            } else if (secretCode.includes(guess[i])) {
                correctDigits++;
            }
        }

        feedback.textContent = `${correctPositions}🔴 ${correctDigits}🟡`;
    }

    function endGame(won) {
        gameOver = true;
        submitButton.disabled = true;
        keypad.querySelectorAll('button').forEach(btn => btn.disabled = true);

        if (won) {
            message.textContent = "¡Felicidades! You hacked the vault and escaped with the loot!";
            message.style.color = 'green';
            // Add a slight delay before redirecting
            setTimeout(() => {
                window.location.href = '/main.html';
            }, 2000); // 2-second delay
        } else {
            message.textContent = "¡Alarma! The police caught you. Game over.";
            message.style.color = 'red';
        }
        codeDisplay.textContent = secretCode;
    }

    keypad.addEventListener('click', (e) => {
        if (e.target.classList.contains('digit') && !gameOver) {
            if (currentGuess.length < 4) {
                currentGuess += e.target.textContent;
                updateDisplay();
            }
        }
    });

    submitButton.addEventListener('click', () => {
        if (gameOver || currentGuess.length !== 4) return;

        attempts++;
        if (currentGuess === secretCode) {
            endGame(true);
        } else {
            provideFeedback(currentGuess);
            if (attempts >= 10) {
                endGame(false);
            }
            currentGuess = '';
            updateDisplay();
        }
    });

    function startGame() {
        updateDisplay();
        updateTimer();

        const interval = setInterval(() => {
            if (gameOver) {
                clearInterval(interval);
                return;
            }

            timeLeft--;
            updateTimer();
        }, 1000);
    }

    startGame();
});
