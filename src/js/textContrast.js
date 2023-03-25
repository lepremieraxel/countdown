const body = document.querySelector('body');

const bgs = ['bg.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpg'];
let currentBg = "";
let i = 0;

function changeBg(){
  if(i != 4){
    i++;
    body.style.backgroundImage = `url('../../assets/img/${bgs[i]}')`;
    currentBg = bgs[i];
    textColor(currentBg);
  } else {
    i = 0;
  }
}
const intervalBgChange = setInterval(changeBg, 10000);

function textColor(img){
  const image = new Image();
  image.src = `../../assets/img/${img}`;
  
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
    // console.log(sum);
    // console.log(max/2.5);
    if(sum < (max/2.5)){
      body.style.color = 'white';
    } else {
      body.style.color = 'black';
    }
  }
}