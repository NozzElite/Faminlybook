var i = 0;
var Images = [
  ""
  "father.png",
  "mother",
  "sister.png",
];

var Names = [
  "Family",
  "Mr.Shiv Singh Rajput",
  "Mrs.Sanchika Rajput",
  "Ms.Shejal Rajput",
  
];

function changeImage() {
  document.getElementById("img").src = Images[i];
  document.getElementById("member").innerHTML = Names[i];
  i++;
  if (i == Images.length || i == Names.length) {
    i = 0;
  }
}
