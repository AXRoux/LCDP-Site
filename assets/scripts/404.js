document.addEventListener('DOMContentLoaded', () => {
    // Use strict mode for better error catching and performance
    'use strict';

    // Use const for elements that won't be reassigned
    const codeDisplay = document.getElementById('code-display');
    const feedback = document.getElementById('feedback');
    const timer = document.getElementById('timer');
    const keypad = document.getElementById('keypad');
    const submitButton = document.getElementById('submit');
    const message = document.getElementById('message');

    // Use let for variables that will be reassigned
    let timeLeft = 120;
    let secretCode = generateSecretCode();
    let currentGuess = '';
    let attempts = 0;
    let gameOver = false;

    function generateSecretCode() {
        // Use Array.from for clearer intention and avoid potential issues with string concatenation
        return Array.from({length: 4}, () => Math.floor(Math.random() * 10)).join('');
    }

    function updateDisplay() {
        // Use textContent instead of innerHTML for better security
        codeDisplay.textContent = currentGuess.padEnd(4, '0');
    }

    function updateTimer() {
        // Use textContent instead of innerHTML for better security
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

        // Use textContent instead of innerHTML
        feedback.textContent = `${correctPositions}🔴 ${correctDigits}🟡`;
    }

    function endGame(won) {
        gameOver = true;
        submitButton.disabled = true;
        keypad.querySelectorAll('button').forEach(btn => btn.disabled = true);

        if (won) {
            message.textContent = "¡Felicidades! You hacked the vault and escaped with the loot!";
            message.style.color = 'green';
            // Safe redirection method
            safeRedirect('/main.html');
        } else {
            message.textContent = "¡Alarma! The police caught you. Game over.";
            message.style.color = 'red';
        }
        codeDisplay.textContent = secretCode;
    }

    // Safe redirection function
    function safeRedirect(url) {
        // Ensure the URL is to the same origin or a relative path
        if (url.startsWith('/') || url.startsWith(window.location.origin)) {
            setTimeout(() => {
                window.location.href = url;
            }, 2000);
        } else {
            console.error('Invalid redirect URL');
        }
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
