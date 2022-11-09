let imageLoaded = 0;
let presses = 0;

let imgArr = [];
let carousel = document.querySelector('#carousel');
let previous = document.querySelector('#previous');
let next = document.querySelector('#next');

for(let i = 0; i < 5; i++){
    imgArr[i] = document.createElement('img');
    imgArr[i].src = 'https://c.tenor.com/19R21_xO-v4AAAAC/bonz-hero.gif/200/200';
    carousel.appendChild(imgArr[i]);   
    imgArr[i].addEventListener("onLoad", (event) => {
        imageLoaded++;
    })

    if(imageLoaded === 5){
        carousel.classList.remove('loading');
        imgArr[i].removeEventListener('onLoad');
    }
}

previous.addEventListener('click', (event) => {
    if(presses > 0){
        presses--;
        calculateTransforms(presses);
        console.log(`Presses: ${presses}`);
    }
})

next.addEventListener('click', (event) => {
    if(presses < 3){
        presses++;
        calculateTransforms(presses);
        console.log(`Presses: ${presses}`);
    }
})




const calculateTransforms = (presses) => {
    let value = presses * -200;
    carousel.style.transform = `translateX(${value}px)`;
};
  