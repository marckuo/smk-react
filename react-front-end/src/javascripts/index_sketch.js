var binCount = 512;
var bins = new Array(binCount);
var width = 400, // canvas width and height
    height = 400,
    margin = 20,
    w = width - 2 * margin, // chart area width and height
    h = height - 2 * margin;

var barWidth =  (h / binCount) * 0.8; // width of bar
var barMargin = (h / binCount) * 0.2; // margin between two bars

//sets a value for spectrum so that the chart doesn't fail if it's
//drawn before the data comes through the socket
var spectrum =[132,160,160,132,138,140,124,120,115,114,115,106,99,91,101,107,109,104,93,88,98,103,97,99,98,91,76,75,74,83,92,91,88,72,70,66,64,67,71,65,68,60,56,47,53,71,75,67,67,64,56,51,41,43,60,57,50,53,51,50,49,54,56,62,62,56,50,48,53,53,46,48,48,33,40,53,52,42,47,51,52,54,50,52,51,44,39,42,45,36,37,44,48,47,28,24,36,37,29,37,38,22,31,37,34,22,22,34,36,32,35,34,41,34,38,44,35,14,23,30,27,32,20,18,29,28,22,25,18,7,15,20,12,0,10,18,18,18,3,12,4,2,0,1,16,22,12,0,14,22,18,0,0,4,20,20,14,12,14,15,15,9,14,14,3,1,2,8,5,8,14,4,3,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,4,3,0,0,0,0,2,9,3,0,0,7,17,18,8,1,8,5,0,6,14,13,17,18,14,11,11,9,5,2,4,13,14,15,11,12,22,21,9,0,8,13,6,8,0,0,1,5,14,15,11,3,12,20,25,14,9,9,23,24,25,27,23,28,19,2,18,26,30,34,28,19,0,16,17,0,0,18,17,6,18,15,8,6,5,19,23,23,23,18,10,15,21,13,20,14,11,16,9,5,25,19,16,18,18,2,12,14,21,15,17,18,10,12,19,15,12,9,26,21,24,19,7,9,8,13,11,15,21,18,12,33,31,26,28,26,16,9,5,15,35,31,14,18,30,18,12,8,8,19,32,28,9,26,31,25,18,7,0,9,7,10,10,12,18,19,13,16,3,1,13,10,9,11,16,20,10,0,14,11,15,12,0,0,8,6,10,10,13,28,21,18,13,3,25,31,35,38,39,35,38,36,33,36,37,38,33,25,29,26,21,19,16,21,17,29,37,41,30,24,15,17,27,13,26,28,10,7,19,17,16,22,16,9,23,32,16,15,23,18,12,13,0,11,20,20,15,2,0,7,17,11,4,14,18,8,0,2,12,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function setup() {
  noStroke();
  height = 300;
  width = 400;
  var canvas = createCanvas(width, height);

  canvas.parent('sound');

  frameRate(10);
  osc = new p5.Oscillator();
  osc.amp(0.5);

  socket.on('sound',
    function(data){
      spectrum = data;
    }
  );

}

function draw(){
  background(0);
  push();
  translate(margin, margin); // ignore margin area
  clear();

  for(var i=0; i<binCount; i++) {
    push();

    //sets the chart colour
    fill('steelblue');
    noStroke();
    translate(i* (barWidth + barMargin), height - spectrum[i]); // jump to the bottom right corner of the bar
    rect(0, 0, barWidth, spectrum[i]); // draw rect
    fill('#FFF');
    pop();
  }
  pop();
}
