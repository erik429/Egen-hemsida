document.addEventListener('scroll', function () {
    const duckId = 'duck';
    let duck = document.getElementById(duckId);
    if (!duck) {
        duck = document.createElement('div');
        duck.id = duckId;
        document.body.appendChild(duck);
        duck.style.position = 'fixed';
        duck.style.top = '-100px';
        duck.style.left = '50%';
        duck.style.width = '70px';
        duck.style.backgroundColor = 'transparent';
        duck.style.zIndex = '1000';
        duck.style.height = '70px';
        duck.style.backgroundImage = "url('images/duck.png')";
        duck.style.backgroundSize = 'cover';
    }

    if (!duck.classList.contains('falling')) {
        duck.style.animation = 'fall 3s ease-in-out, bounce 0s 5s infinite';
        duck.classList.add('falling');
        setTimeout(() => {
            duck.style.animation = 'none';
            duck.classList.remove('falling');
        }, 3000);
    }
});
