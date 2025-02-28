// JavaScript code for interactivity

document.addEventListener('DOMContentLoaded', function() {
    // Countdown Overlay
    const countdownOverlay = document.getElementById('countdown-overlay');
    const countdownElement = document.getElementById('countdown');

    //Play audio with button

    const audio = document.getElementById('background-music');
    const playButton = document.createElement('button');
    playButton.innerText = "Play Music";
    document.body.appendChild(playButton);

    playButton.addEventListener('click', () => {
        audio.play().catch(error => console.error("Audio play failed:", error));
        playButton.style.display = 'none';
    });

    /*
    //Play audio automatically
    const audio = document.getElementById('background-music');
    const playButton = document.createElement('button');
    playButton.innerText = "Play Music";
    playButton.style.display = 'none';  // Hide the button initially
    document.body.appendChild(playButton);

    function playAudio() {
        audio.play().catch(() => {
            // Autoplay failed, show the play button
            playButton.style.display = 'block';
            playButton.addEventListener('click', () => {
                audio.play();
                playButton.style.display = 'none';  // Hide the button after playing
            });
        });
    }

    playAudio();
    */


    let countdownValue = 3;
    countdownElement.innerHTML = countdownValue;

    const countdownInterval = setInterval(() => {
        countdownValue--;
        if (countdownValue <= 0) {
            clearInterval(countdownInterval);
            countdownOverlay.style.display = 'none';
            audio.play();
        } else {
            countdownElement.innerHTML = countdownValue;
        }
    }, 1000);



    /*
    // Countdown Timer
    const birthday = new Date('2025-02-28T00:00:00').getTime();
    const timer = document.getElementById('timer');

    function updateTimer() {
        const now = new Date().getTime();
        const distance = birthday - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timer.innerHTML = `
            <span id="days">${days}</span> Days
            <span id="hours">${hours}</span> Hours
            <span id="minutes">${minutes}</span> Minutes
            <span id="seconds">${seconds}</span> Seconds
        `;

        if (distance < 0) {
            clearInterval(interval);
            timer.innerHTML = "Happy Birthday!";
        }
    }
    

    const interval = setInterval(updateTimer, 1000);
    */

    // Guest Book
    const form = document.getElementById('guestbook-form');
    const messagesDiv = document.getElementById('messages');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        const messageDiv = document.createElement('div');
        messageDiv.className = 'message';
        messageDiv.innerHTML = `<strong>${name}:</strong> ${message}`;
        messagesDiv.appendChild(messageDiv);

        form.reset();
    });

    // Confetti Animation
    const confettiContainer = document.getElementById('confetti');

    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confettiContainer.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }

    setInterval(createConfetti, 200);
});