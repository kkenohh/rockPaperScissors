const buttons = document.querySelectorAll('.button');

buttons.forEach( button => {
    button.addEventListener('click', (e) => console.log(e));
});

