'use strict';
const cards = document.querySelectorAll('.card');
for (let i =0; i< cards.length; i++) {
    const card = cards[i];
    card.addEventListener('mousemove', startRotate)
    card.addEventListener('mouseout', stopRotate)
}

function startRotate(event){
    const cardItem = this.querySelector('.card-item');
    // cardItem.innerText = event.offsetX + ' ' + event.offsetY;
    const halfHeight = cardItem.offsetHeight/2; // находим ширину элемента
    const halfWidth = cardItem.offsetWidth/2; // находим высоту элемента
    cardItem.style.transform = 
    'rotateX('+-(event.offsetY - halfHeight)/10+'deg)rotateY('+(event.offsetX - halfWidth)/10+'deg)';
    
    cardItem.style.boxShadow = -(event.offsetX - halfWidth)/10+'px '+-(event.offsetY - halfWidth)/10+'px 50px #999999';
    if (event.offsetX <= halfWidth && event.offsetY > halfWidth) {
        cardItem.style.boxShadow = -(event.offsetX - halfWidth)/10+'px '+-(event.offsetY - halfWidth)/10+'px 50px #999999';
    }else if (event.offsetX <= halfWidth && event.offsetY < halfWidth ){
        cardItem.style.boxShadow = -(event.offsetX - halfWidth)/10+'px '+-(event.offsetY - halfWidth)/10+'px 50px #999999';
    }
    else if (event.offsetX > halfWidth && event.offsetY > halfWidth ){
        cardItem.style.boxShadow = -(event.offsetX - halfWidth)/10+'px '+-(event.offsetY - halfWidth)/10+'px 50px #999999';
    }
}

function stopRotate(event){
    const cardItem = this.querySelector('.card-item');
    cardItem.style.transform = 'rotate(0)';
    cardItem.style.boxShadow = 'none';

}
