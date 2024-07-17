
const coefficient = 0.75;
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
canvas.width =  window.innerWidth *  coefficient;
canvas.height = window.innerHeight *  coefficient;
let img = new Image();
img.src = "/frontend/assets/images/glow-table.svg";
img.onload = update;


class Paddle{
  constructor(x, y, src){
      this.x = x;
      this.y = y;
      this.width = 50;
      this.height = 150;
      this.src = src;
      this.dy = 0;
      this.speed =  2;
  }

  draw(ctx){
      let img = new Image();
      img.src = this.src;
      ctx.drawImage(img, this.x, this.y, this.width, this.height);  
  }
  move() {
    this.y += this.dy * this.speed;
    if (this.y < 30) this.y = 30;
    if (this.y + this.height > Number(canvas.height) - 30) this.y =  Number((canvas.height) - 30) - this.height;
  }

}

class Ball{
  constructor(x, y, src){
      this.x = x;
      this.y = y;
      this.width = 50;
      this.height = 50;
      this.src = src;
  }

  draw(ctx){
      let img = new Image();
      img.src = this.src;
      ctx.drawImage(img, this.x, this.y, this.width, this.height);  
  }
}



// Load the image once when the script is first run
let paddle1 = new Paddle(30, 550, "/frontend/assets/images/neon-paddle.svg");
let paddle2 = new Paddle(canvas.width - 80, 100, "/frontend/assets/images/neon-paddle.svg");
let ball = new Ball(200, 300, "/frontend/assets/images/neon-ball.svg");

window.addEventListener('resize', () => {
  console.log("resizing");
  canvas.width = window.innerWidth *  coefficient;
  canvas.height = window.innerHeight * coefficient;
  paddle2.x = canvas.width - 100;
  paddle2.y = 100;
  paddle1.x = 50;
  paddle1.y = 550;
  update();
});

var keys = {
  paddle1: {
    up: 'w',
    down: 's'
  },
  paddle2: {
    up: 'ArrowUp',
    down: 'ArrowDown'
  }
};
window.addEventListener('keydown', function(event) {
  var key = event.key;

  if (key === keys.paddle1.up) {
    paddle1.dy = -2;
  } else if (key === keys.paddle1.down) {
    paddle1.dy = 2;
  } else if (key === keys.paddle2.up) {
    paddle2.dy = -2;
  } else if (key === keys.paddle2.down) {
    paddle2.dy = 2;
  }
});

window.addEventListener('keyup', function(event) {
  var key = event.key;

  if (key === keys.paddle1.up || key === keys.paddle1.down) {
    paddle1.dy = 0;
  } else if (key === keys.paddle2.up || key === keys.paddle2.down) {
    paddle2.dy = 0;
  }
});


function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); 
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height); 
  paddle1.move();
  paddle1.draw(ctx);
  paddle2.move();
  paddle2.draw(ctx);
  ball.draw(ctx);
  requestAnimationFrame(update);
}
requestAnimationFrame(update);