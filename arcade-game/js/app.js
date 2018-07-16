// Enemies our player must avoid
var Enemy = function(x,y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;     //x position of enemy
    this.y = y;     //y position of enemy
    this.speed = speed;     //speed position of enemy

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

// You should multiply any movement by the dt parameter
// which will ensure the game runs at the same speed for
// all computers.
Enemy.prototype.update = function(dt) {
    this.x += this.speed * dt;
/*If enemy's position is farther than game for, 
the enemy goes back to the left side*/

    if(this.x > 505) {
        this.x = -50;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x,y) {
    this.x = x;     //x position of player
    this.y = y;     //y position of player
    this.sprite = 'images/char-horn-girl.png'; //the image for the player
};

/*Player update method.
If the player is on the left side of screen and wants to move left,
he just stay where he is.
The same for right side and down*/
Player.prototype.update = function(x,y) {
    if(this.x < 0) {
        this.x = 0;
    }

    if(this.x > 400) {
        this.x = 400;
    }

    if(this.y > 400) {
        this.y = 400;
    }

/*If the player is on the water, he win the game.*/
    if(this.y < 50) {
/*This section limits the player to move avatar. 
After player reached the water, if he'll try to move the avatar,
he'll be returned to the start point*/
        this.handleInput = function() {
            this.x = 200;
            this.y = 400;
        }
/*The modal window is shown to the player*/
        document.querySelector(".overlay").classList.add("modal-visibility");
/*Clicking on the "Play again!" button will reload the game*/
        document.querySelector(".play").addEventListener("click", function() {
            document.location.reload();
        });
/*Clicking on the "Cancel" button will close the modal and stop the enemies.*/
        document.querySelector(".cancel").addEventListener("click", function() {
            document.querySelector(".overlay").classList.remove("modal-visibility");
            allEnemies.forEach(function(element) {
                element.speed = 0;
            })
        })
    }

    this.collision(); 
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/*handleInput method define where the player should be moved
after pressing the keys*/
Player.prototype.handleInput = function(arrow) {
    if(arrow == "left") {
        this.x = this.x - 101;
    }
    if(arrow == "right") {
        this.x = this.x + 101;
    }
    if(arrow == "up") {
        this.y = this.y - 83;
    }
    if(arrow == "down") {
        this.y = this.y + 83;
    }
};


/*collision method defines when the collision takes place.
It checks for each element of enemies array if distance between
enemy and the player is less than 60px on x axis and less than 13px on y axis.
If it is, the player goes to the start point.

Math.abs allows to check the difference of coordinate,
nevermind if enemy is behind or before the player*/
Player.prototype.collision = function() {
    allEnemies.forEach(function(element) {
        if(Math.abs(player.x - element.x) <= 60 && Math.abs(player.y - element.y) <= 13) {
        player.x = 200;
        player.y = 400;
    };
    })
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let allEnemies = [];

/*Every enemy is provided with start coordinates and speed.
The speed is generated randomly every time.
I also added some numbers to each random number.
I've tried to use higher numbers (like 400), but in my opinion
then enemies are too fast.*/

var firstEnemy = new Enemy(-50, 68, Math.floor(Math.random() * 100) + 180); 
allEnemies.push(firstEnemy);
var secondEnemy = new Enemy(-300, 151, Math.floor(Math.random() * 100) + 60);
allEnemies.push(secondEnemy);
var thirdEnemy = new Enemy(-500, 234, Math.floor(Math.random() * 100) + 140);
allEnemies.push(thirdEnemy);
var fourthEnemy = new Enemy(-200, 68, Math.floor(Math.random() * 100) + 100);
allEnemies.push(fourthEnemy);
var fifthEnemy = new Enemy(-80, 151, Math.floor(Math.random() * 100) + 75);
allEnemies.push(fifthEnemy);
var sixthEnemy = new Enemy(-400, 234, Math.floor(Math.random() * 100) + 150);
allEnemies.push(sixthEnemy);

// Place the player object in a variable called player
let player = new Player(200, 400);  //player's start coordinates

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
