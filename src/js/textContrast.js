const body = document.querySelector('body');
const userBtns = document.querySelectorAll('.top-bar button');

function textColor(img){
  const image = new Image();
  image.src = img;
  
  image.onload = function(){
    const canvas = document.createElement("canvas");
    let context = canvas.getContext('2d');
    canvas.width = image.width;
    canvas.height = image.height;
    context.drawImage(image, 0, 0);
    let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    let pixels = imageData.data;
    let sum = 0;
    let max = 0;
    for(let i = 0; i < pixels.length; i += 4){
      let L = (pixels[i] + pixels[i+1] + pixels[i+2]) / 3;
      max += 255;
      sum += L;
    }
    if(sum < (max/2.5)){
      body.style.color = 'white';
      userBtns.forEach(btn => {
        btn.style.color = 'white';
      });
    } else {
      body.style.color = 'black';
      userBtns.forEach(btn => {
        btn.style.color = 'black';
      });
    }
  }
}