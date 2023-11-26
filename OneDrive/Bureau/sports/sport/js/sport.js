
let icones = document.querySelectorAll('.social');

function agrandirIcone(event) {
    event.target.style.transform = 'scale(1.2)'; 
}


function reinitialiserIcone(event) {
    event.target.style.transform = 'scale(1)'; 
}


icones.forEach(icon => {
    icon.addEventListener('mouseover', agrandirIcone); 
    icon.addEventListener('mouseout', reinitialiserIcone);
});



