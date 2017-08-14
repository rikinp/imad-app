console.log('Loaded!');

var object = document.getElementById('main-text');

object.innerHTML = 'New value'; 

var img = document.getElementById('madi');
img.onclick = function () {
    img.style.marginLeft = '100px';
};