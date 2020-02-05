const images = ["url(\"images/maku_tree.gif\")", "url(\"images/library.jpg\")", "url(\"images/train_station.jpg\")", "url(\"images/bank.jpg\")", "url(\"images/code2.png\")"];
let currentBackground = images.findIndex((str) => { return str == document.getElementById('Body').style.backgroundImage; }); 

function advanceImage() {
  console.log(document.getElementById('Body').style.backgroundImage);
  console.log(currentBackground);
  currentBackground++;
  if (currentBackground >= images.length) {
    currentBackground = 0;
  }
  document.getElementById('Body').style.backgroundImage = images[currentBackground];
}
