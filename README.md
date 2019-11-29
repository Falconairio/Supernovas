# SUPERNOVAS
Ironhack - Hackathon 

## Description
Jumper is a game where the player can move left, right and jump. The goal of the game is to move your character to reach the "star" at the top of the map. Along the way, the player can "die" when they collide with obstacles. Upon dying, a "Game Over" screen will appear with the ability to restart game.


## MVP (DOM - CANVAS)
<i>CANVAS</i>, This is a game where the player can move & jump from platform to platform with the ability to complete the game by reaching the top.


## Backlog
<ul>
  <li>Obstacles</li>
  <li>Coins</li>
  <li>Coin counter</li>
  <li>Window(view) scrolling with character</li
  <li>Character sprite</li>
  <li>Star sprite</li>
  <li>Coin sprite</li>
  <li>Sprite "animation"</li>
  <li>Background & atmosphere styling</li>
  <li>Sceen transitions</li>
  <li>Background Audio</li>
  <li>Sounds Effects</li>
</ul>

## Data structure

### main.js
```

buildSplashScreen(){
}


buildGameScreen(){
}

buildGameOverScreen(){
}

buildDom() {
}
```

### game.js
```
Game() {
  this.canvas;
}

Game.prototype.startLoop() {
}

Game.prototype.checkCollisions {
}

Game.prototype
```

### player.js
```
Player() {
  this.canvas
  this.ctx
  this.size
  this.x
  this.y
  this.direction
  this.speed
}

Player.prototype.startPosition() {
}

Player.prototype.movement() {
}

Player.prototype.screenCollision () {
}

Player.prototype.enemyCollision () {
}

Player.prototype.winCollision () {
}

Player.prototype.draw() {
  this.ctx.fillStyle
  this.ctx.fillRect
}
```

### enemy.js
```
Enemy() {
  this.canvas
  this.ctx
  this.size
  this.x
  this.y
  this.speed
}

Enemy.prototype.draw() {
  this.ctx
  this.ctx.FillRect
    this.x
    this.y
    this.size
    this.size
}

Enemy.prototype.updatePosition() {
}

Enemy.prototype.isInsideScreen() {
}
```


## States y States Transitions
```
- splashScreen
  - buildSplash()
  - addEventListener(startGame)

- gameScreen
  - buildGameScreen()
  - addEventListener(enemyCollision)
  - addEventListener(winCollision)

- gameoverScreen
  - buildGameOverScreen()
  - addEventListener(startGame)

- winScreen
  - buildWinScreen()
  - addEventListener(startGame)

````

## Tasks
- Main - buildDom
- Main - buildSplashScreen
- Main - addEventListener
- Main - buildGameScreen
- Main - buildGameOverScreen
- Main - buildWinScreen
- Game - buildCanvas
- Game - clearCanvas
- Game - updateCanvas
- Game - drawCanvas
- Game - setGameOver
- Game - setWin
- Game - addEventListeners
- Player - construct Player
- Player - basic movement
- Player - jumping
- Player - screenCollision
- Player - enemyCollision
- Player - winCollision
- Enemy - construct Enemy
- Enemy - setRandomLocation
- Enemy - setDirection
- Enemy - updatePosition
- Enemy - isInsideOfScreen

## Links


### Trello
[Link url](https://trello.com/b/GxRdLZNQ/supernovas)


### Git
URls for the project repo and deploy
[Link Repo](http://github.com)
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)
