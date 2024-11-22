document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('challenges-nav');
    const challengeFrame = document.getElementById('challenge-frame');

    // Default to first challenge
    loadChallenge('expanding-search-bar');

    nav.addEventListener('click', (event) => {
        const button = event.target.closest('button');
        if (button) {
            const challenge = button.dataset.challenge;
            loadChallenge(challenge);
        }
    });

    function loadChallenge(challengeName) {
        // Add leading slash and ensure correct path
        challengeFrame.src = `./challenges/${challengeName}`;
    }
});