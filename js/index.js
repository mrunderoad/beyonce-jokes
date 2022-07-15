// var myArray = [
// "./images/beyonce1.jpg",
// "./images/beyonce2.jpg",
// "./images/beyonce3.jpg",
// "./images/beyonce4.jpg",
// "./images/beyonce5.jpg",
// "./images/beyonce6.jpg",
// "./images/beyonce7.jpg",
// "./images/beyonce8.jpg",
// "./images/beyonce9.jpg",
// "./images/beyonce10.jpg"
// ];

// var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

function display_random_image() 
{
     var theImages = [{
        src: "./images/beyonce1.jpg",
        width: "320",
      height: "195"
    }, {
        src: "./images/beyonce2.jpg",
        width: "320",
        height: "195"
    }, {
        src: "./images/beyonce3.jpg",
        width: "320",
      height: "195"
      }, {
        src: "./images/beyonce4.jpg",
        width: "320",
        height: "195"
    }, {
    }, {
      src: "./images/beyonce5.jpg",
      width: "320",
      height: "195"
  }, {
  }, {
    src: "./images/beyonce6.jpg",
    width: "320",
    height: "195"
}, {
}, {
  src: "./images/beyonce7.jpg",
  width: "320",
  height: "195"
}, {
}, {
  src: "./images/beyonce8.jpg",
  width: "320",
  height: "195"
}, {
}, {
  src: "./images/beyonce9.jpg",
  width: "320",
  height: "195"
}, {
}, {
  src: "./images/beyonce10.jpg",
  width: "320",
  height: "195"
    }];
    
    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }
   
// create random image number
  function getRandomInt(min,max) 
    {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;
    
imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
    }  

// 0 is first image,   preBuffer.length - 1) is  last image
  
var newImage = getRandomInt(0, preBuffer.length - 1);
 
// remove the previous images
var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
// display the image  
document.body.appendChild(newImage);
}