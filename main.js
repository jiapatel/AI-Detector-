img = "";

function preload(){
img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#c9aded");
    text("Dog", 45, 75);
    noFill();
    stroke("#c9aded");
   rect(30, 60, 450, 350);

   fill("#c9aded");
   text("Cat", 320, 120);
   noFill();
   stroke('#c9aded')
   rect(300, 90, 270, 320 );

}