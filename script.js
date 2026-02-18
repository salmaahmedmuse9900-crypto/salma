document.addEventListener('DOMContentLoaded', () => {
    // Typing Effect
    const textElement = document.getElementById('typing-text');
    const texts = ["Web Developer", "Programmer", "Tech Enthusiast"];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";

    (function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        if (textElement) {
            textElement.textContent = letter;
        }

        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000); // Wait before typing next word
        } else {
            setTimeout(type, 100);
        }
    })();

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Copy Email to Clipboard
    const copyBtn = document.getElementById('copy-btn');
    const emailText = document.getElementById('email-text');

    if (copyBtn && emailText) {
        copyBtn.addEventListener('click', () => {
            const email = emailText.innerText;
            navigator.clipboard.writeText(email).then(() => {
                const originalIcon = copyBtn.innerHTML;
                copyBtn.innerHTML = '<span style="color: #00d4ff; font-weight: bold;">Copied!</span>';
                setTimeout(() => {
                    copyBtn.innerHTML = originalIcon;
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
    }
});
