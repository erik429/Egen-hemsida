document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Vänligen fyll i alla fält.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Vänligen ange en giltig e-postadress.');
        return;
    }

    alert('Ditt meddelande har skickats!');
    this.reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
