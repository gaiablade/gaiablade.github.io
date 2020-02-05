let currentImage = 1;
showImage(currentImage);

function plusImage(num) {
    currentImage += num;
    showImage(currentImage);
}

function showImage(index) {
    var x = document.getElementsByClassName('center');
    if (currentImage > x.length) currentImage = 1;
    else if (currentImage < 1) currentImage = x.length;
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
    x[currentImage - 1].style.display = 'block';
}
