let circle = document.getElementById('circle');

circle.addEventListener('mouseover', function () {
    circle.classList.add('blue');
    // Timer for Mobile
    function reverse_circle() {
        circle.classList.remove('blue');
    }
    setTimeout(reverse_circle, 3000);
});

circle.addEventListener('mouseout', function () {
    circle.classList.remove('blue');
});


circle.addEventListener('click', function() {
    circle.classList.add('blue');
    // Timer for Mobile
    function reverse_circle() {
        circle.classList.remove('blue');
    }
    setTimeout(reverse_circle, 3000);
});