const coefficient = 0.75;
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth * coefficient;
canvas.height = window.innerHeight * coefficient;
let img = new Image();
img.src = "/frontend/assets/images/glow-table.svg";
img.onload = update;

let player1Score = 0;
let player2Score = 0;

let player1ScoreElement = document.getElementById("player1");
let player2ScoreElement = document.getElementById("player2");


function startRound(paddle1, paddle2, ball) {
  // Reset the positions of the paddles and the ball
  paddle1.y = canvas.height / 2 - paddle1.height / 2;
  paddle2.y = canvas.height / 2 - paddle2.height / 2;
  ball.x = canvas.width / 2 - ball.width / 2;
  ball.y = canvas.height / 2 - ball.height / 2;

}
class Paddle {
  constructor(x, y, src) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 180;
    this.src = src;
    this.dy = 0;
    this.speed = 4;
  }

  draw(ctx) {
    let img = new Image();
    img.src = this.src;
    ctx.drawImage(img, this.x, this.y, this.width, this.height);
  }

  move() {
    this.y += this.dy * this.speed;
    if (this.y < 40) this.y = 40;
    if (this.y + this.height > Number(canvas.height) - 40) this.y = Number((canvas.height) - 40) - this.height;
  }
}

class Ball {
  constructor(x, y, src) {
    this.x = x;
    this.y = y;
    this.width = 60;
    this.height = 60;
    this.src = src;
    this.dx = 1;
    this.dy = 1;
    this.speed = 6;
  }

  draw(ctx) {
    let img = new Image();
    img.src = this.src;
    ctx.drawImage(img, this.x, this.y, this.width, this.height);
  }

  move() {
    // Update the ball's position
    this.x += this.dx * this.speed;
    this.y += this.dy * this.speed;

    // If the ball hits the edge of the canvas, reverse its direction
    if (this.x <= 0 || this.x + this.width > Number(canvas.width) - 20) {
      if (this.x <= 0) {
        player2Score++;
        player2ScoreElement.innerText = player2Score;
        if(player2Score == 5) {
          alert("Player 2 wins!");
          player1Score = 0;
          player2Score = 0;
          player1ScoreElement.innerText = player1Score;
          player2ScoreElement.innerText = player2Score;
        }
      }
       else {
        player1Score++;
        player1ScoreElement.innerText = player1Score;
        if(player1Score == 5) {
          alert("Player 1 wins!");
          player1Score = 0;
          player2Score = 0;
          player1ScoreElement.innerText = player1Score;
          player2ScoreElement.innerText = player2Score;
        }
        
      }
      startRound(paddle1, paddle2, ball);
    }
    if (this.y <= 0 || this.y + this.height > Number(canvas.height) - 20) {
      this.dy *= -1;
    }

    // Check for collision with paddles
    this.checkCollisionWithPaddle(paddle1);
    this.checkCollisionWithPaddle(paddle2);
  }

  checkCollisionWithPaddle(paddle) {
    if (
      this.x < paddle.x + paddle.width &&
      this.x + this.width > paddle.x &&
      this.y < paddle.y + paddle.height &&
      this.y + this.height > paddle.y
    ) {
      // Reverse ball's horizontal direction
      this.dx *= -1;

        // Optional: Add some variation to the vertical direction
        let paddleCenterY = paddle.y + paddle.height / 2;
        let ballCenterY = this.y + this.height / 2;
        this.dy = (ballCenterY - paddleCenterY) / (paddle.height / 2);
    }
  }
}

// Load the image once when the script is first run
let paddle1 = new Paddle(30, canvas.height / 2 - 50, "/frontend/assets/images/neon-paddle.svg");
let paddle2 = new Paddle(canvas.width - 80, canvas.height / 2 - 50, "/frontend/assets/images/neon-paddle.svg");
let ball = new Ball((canvas.width / 2) - 30, canvas.height / 2, "/frontend/assets/images/neon-ball.svg");

window.addEventListener('resize', () => {
  console.log("resizing");
  canvas.width = window.innerWidth * coefficient;
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
window.addEventListener('keydown', function (event) {
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

window.addEventListener('keyup', function (event) {
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
  // ball.move();w
  ball.draw(ctx);
  requestAnimationFrame(update);
}
requestAnimationFrame(update);
