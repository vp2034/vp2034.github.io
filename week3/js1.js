let imageIndex = 0;
const timeInterval = 2500;
const imagesArray = [
    'images/1.jpeg',
    'images/2.jpeg',
    'images/3.jpeg',
    'images/4.jpeg',
    'images/5.jpeg',
    'images/6.jpeg',
    'images/7.jpeg',
    'images/8.jpeg'
];

function changeImage() {
    const image = document.getElementsByName('slide')[0];
    image.src = imagesArray[imageIndex];
    imageIndex++;
    if (imageIndex === imagesArray.length) {
        imageIndex = 0;
    }
}

setInterval(changeImage, timeInterval);
window.addEventListener('load', changeImage);