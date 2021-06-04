
var imgEnlarged = 0;
var otherEnlargedImgs = [0, 0, 0, 0, 0, 0, 0, 0,];
function imgEnlarge(e){
  if (imgEnlarged==0){ //Basic function if no enlarged, enlarge click element
    e.style.width = "400px";
    document.getElementById(0).style.backgroundColor(red);
    imgEnlarged = 1;
    otherEnlargedImgs[e] = 1 
  }
  else if (imgEnlarged==1) { //If an image is enlarged, is it this one? If so, resize image
    e.style.width = "300px";
    imgEnlarged = 0;
    otherEnlargedImgs[0] = 0
  }
  else if (imgEnlarged==1 && imgEnlargedOther==1)  { //if enlarged, which? Close other, open current element
    e.style.width = "300px";

    imgEnlarged = 1
    otherEnlargedImgs[0] = 1
  }
}
