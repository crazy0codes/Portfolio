//554

let menuBtn = document.querySelector('.container');
let header = document.querySelector('.header');
let menuBar = document.querySelector('table')


function myFunction(x) {
    x.classList.toggle("change");
    if(menuBar.style.display == 'block'){
        menuBar.style.display = 'none'
    }
    else {
        menuBar.style.display = 'block'
    }
}