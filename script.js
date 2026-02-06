function nextPage() {
    window.location.href = "yes.html";
}

function moveButton() {
    var noBtn = document.getElementById('noButton');
    var x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    var y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}
