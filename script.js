let circle = document.getElementById('circle');

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

// Two Mouse Clicks
circle.addEventListener('click', () => {
    console.log("Circle Clicked");
    circle.classList.add('blue');
    // Timer for Mobile
    function reverse_circle() {
        circle.classList.remove('blue');
    }
    setTimeout(reverse_circle, 3000);
});


// function blue_button () {
//     circle.classList.add('blue');
//     // Timer for Mobile
//     function reverse_circle() {
//         circle.classList.remove('blue');
//     }
//     setTimeout(reverse_circle, 3000);
// }

// circle.addEventListener('click', function () {
//     console.log("Clicked One");
//     blue_button();
// });
