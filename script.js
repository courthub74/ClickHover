let circle = document.getElementById('circle');

circle.addEventListener('mouseover', function () {
    circle.classList.add('blue');
    // Timer for Mobile 
    // function reverse_circle() {
    //     circle.classList.remove('blue');
    // }
    // setTimeout(reverse_circle, 3000);
});

circle.addEventListener('mouseout', function () {
    circle.classList.remove('blue');
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
