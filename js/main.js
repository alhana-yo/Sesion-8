let face = document.querySelector('.face');
let head = document.querySelector('.head');

function laugh(e) {
    face.innerHTML =';)';
}

function initialPosition(e){
    face.innerHTML =':)';
    console.log(face);
}

face.addEventListener('click', laugh );
head.addEventListener('mouseout', initialPosition);


