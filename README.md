# Arcade game clone

## Overview
 
CSS folder includes the styles file for modal window.  
Images folder includes the .png sprites used for the game background and characters.  
JS folder includes the java script file with game logic (app.js), resources (resources.js) and game engine (engine.js).  

## How to run the game

To start the game user should download zip with all files, next open the index file with browser. The game is ready to play.  

## How to play the game

User can move the character with arrow keys of the keyboard.  
Every key pressing means one cell step in the corresponding direction.  
User's goal to reach the water, simultaneously bypassing the enemies.  
If the user touch any enemy, he will be returned to the start point.  

If the user reach the water, the modal window appears.  
If user choose "Play again!" button, the game will restart.  
If user choose "Cancel" button, the enemies will stop.  

## References

* https://github.com/DanielaKuester/Udacity-Project04-Arcade-Game - helps me to understand the collision logic and
how to limit the user's movement when the modal window appears.
* https://jlongster.com/Making-Sprite-based-Games-with-Canvas - this article helps me to understand the game engine,
since it is my first attempt to canvas.
* https://sabe.io/tutorials/how-to-create-modal-popup-box - modal window logic.
