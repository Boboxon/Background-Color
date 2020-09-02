const colorBtn = document.querySelector('.colorBtn');

const bodybg = document.querySelector('body');

const colors = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 
'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red', 
'silver', 'teal', 'white', 'yellow'];

colorBtn.addEventListener('click', changeColor);


function changeColor(){
    let random = Math.floor(Math.random()*colors.length);
    bodybg.style.background = colors[random];
}
