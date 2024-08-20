'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const codeDisplay = document.getElementById('code-display');
    const feedback = document.getElementById('feedback');
    const timer = document.getElementById('timer');
    const keypad = document.getElementById('keypad');
    const submitButton = document.getElementById('submit');
    const message = document.getElementById('message');
    const backspaceButton = document.getElementById('backspace');

    let timeLeft = 120;
    let secretCode = generateSecretCode();
    let currentGuess = '';
    let gameOver = false;

    function generateSecretCode() {
        return Array.from({length: 4}, () => Math.floor(Math.random() * 10)).join('');
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
        let correctPositions = 0;
        let correctDigits = 0;
        let secretCodeCopy = secretCode.split('');
        let guessCopy = guess.split('');

        // First pass: Check for correct positions
        for (let i = 3; i >= 0; i--) {
            if (guessCopy[i] === secretCodeCopy[i]) {
                correctPositions++;
                secretCodeCopy.splice(i, 1);
                guessCopy.splice(i, 1);
            }
        }

        // Second pass: Check for correct digits in wrong positions
        for (let i = 0; i < guessCopy.length; i++) {
            let index = secretCodeCopy.indexOf(guessCopy[i]);
            if (index !== -1) {
                correctDigits++;
                secretCodeCopy.splice(index, 1);
            }
        }

        // Update feedback with only the colored indicators
        feedback.textContent = '🔴'.repeat(correctPositions) + '🟡'.repeat(correctDigits);
    }

    function endGame(won) {
        gameOver = true;
        submitButton.disabled = true;
        keypad.querySelectorAll('button').forEach(btn => btn.disabled = true);

        if (won) {
            message.textContent = "¡Felicidades! You hacked the vault and escaped with the loot!";
            message.style.color = 'green';
            safeRedirect('/main.html');
        } else {
            message.textContent = "¡Alarma! The police caught you. Game over.";
            message.style.color = 'red';
        }
        codeDisplay.textContent = secretCode;
    }

    function safeRedirect(url) {
        if (url.startsWith('/') || url.startsWith(window.location.origin)) {
            setTimeout(() => {
                window.location.href = url;
            }, 2000);
        } else {
            console.error('Invalid redirect URL');
        }
    }

    keypad.addEventListener('click', (e) => {
        if (gameOver) return;

        if (e.target.classList.contains('digit')) {
            if (currentGuess.length < 4) {
                currentGuess += e.target.textContent;
                updateDisplay();
            }
        } else if (e.target.id === 'backspace') {
            if (currentGuess.length > 0) {
                currentGuess = currentGuess.slice(0, -1);
                updateDisplay();
            }
        }
    });

    document.addEventListener('keydown', (e) => {
        if (gameOver) return;

        if (e.key >= '0' && e.key <= '9') {
            if (currentGuess.length < 4) {
                currentGuess += e.key;
                updateDisplay();
            }
        } else if (e.key === 'Backspace') {
            if (currentGuess.length > 0) {
                currentGuess = currentGuess.slice(0, -1);
                updateDisplay();
            }
        } else if (e.key === 'Enter') {
            submitButton.click();
        }
    });

    submitButton.addEventListener('click', () => {
        if (gameOver || currentGuess.length !== 4) return;

        if (currentGuess === secretCode) {
            endGame(true);
        } else {
            provideFeedback(currentGuess);
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
