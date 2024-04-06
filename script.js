let circle = document.getElementById('circle');

// Desktop Interactions
circle.addEventListener('mouseover', () => {
    circle.classList.add('blue');
    // Timer for Mobile 
    // function reverse_circle() {
    //     circle.classList.remove('blue');
    // }
    // setTimeout(reverse_circle, 3000);
});

circle.addEventListener('mouseout',  () => {
    circle.classList.remove('blue');
});

// Pointerdown
circle.addEventListener('pointerdown', e => {
    console.log(e);
    console.log("Circle Clicked");
    circle.classList.add('blue');
    // Timer for Mobile
    function reverse_circle() {
        circle.classList.remove('blue');
    }
    setTimeout(reverse_circle, 3000);
});



