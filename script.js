let circle = document.getElementById('circle');

circle.addEventListener('mouseover', function () {
    circle.classList.add('blue');
});

circle.addEventListener('mouseout', function () {
    circle.classList.remove('blue');
});