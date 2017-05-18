var game = new Phaser.Game(480, 240, Phaser.CANVAS, 'mb3', { preload: preload, create: create, update: update, render: render });

var Keys = Phaser.Keyboard;

function preload() {
    game.load.tilemap('map', 'assets/marioMap3.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('marioTileset', 'assets/marioTileset.png');
    game.load.image('marioEnemy', 'assets/marioEnemy.png', 16, 16, 1);
    game.load.spritesheet('hero', 'assets/marioCharacters.png', 16.6, 16.6);
}

  var map;
  var cursors;
  var layer;
  var facing = 'left';
  var jumpButton;
  var jumpTimer = 0;
  var player;
  var lives = 3;
  var scaleWindow;
  var enemy1;
  var enemy2;
  var enemy3;
  var enemy4;

function create() {

    this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.refresh();

    canvas_width = 720;
    canvas_height = 480;
    canvas_height_max = window.innerHeight;
    canvas_width_max = window.innerWidth;
    aspect_ratio = canvas_width / canvas_height;
    if (aspect_ratio > 1) scale_ratio = canvas_height / canvas_height_max;
    else scale_ratio = canvas_width / canvas_width_max;

    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.stage.backgroundColor = "#00BFFF";

    game.time.desiredFps = 30;

    map = game.add.tilemap('map');

    map.addTilesetImage('marioTileset');

    layer = map.createLayer('Tile Layer 1');

    layer.resizeWorld();

    map.setCollisionBetween(1, 15);


    // map.setCollisionByIndex(66); //? box
    map.setCollisionByIndex(67); // plain square rocks

    map.setCollisionByIndex(67);// Ground
    map.setCollisionByIndex(68);// Bricks
    map.setCollisionByIndex(91);// Question block
    map.setCollisionByIndex(100);// Flat brick
    map.setCollisionByIndex(37); // Platform in 2nd level
    map.setCollisionByIndex(25);
    map.setCollisionByIndex(34);

    map.setCollisionByIndex(270);
    map.setCollisionByIndex(271);
    map.setCollisionByIndex(272);
    map.setCollisionByIndex(1);
    map.setCollisionByIndex(34);
    map.setCollisionByIndex(267);
    map.setCollisionByIndex(268);
    map.setCollisionByIndex(300);
    map.setCollisionByIndex(301);

    player = game.add.sprite(107, 208, 'hero');
    game.physics.enable(player, Phaser.Physics.ARCADE);

    player.anchor.setTo(.5,.5);
    player.body.bounce.y = 0;
    player.body.collideWorldBounds = true;
    player.body.setSize(8, 8, 8, 8);

    player.animations.add('right', [0,1,2,3], 12, true);
    player.animations.add('turn', [4], 12, true);

    enemySpawn();

    game.camera.follow(player);

    game.physics.arcade.gravity.y = 400;

    game.world.setBounds(0, 0, 2720, 240, "map");

    lives = game.add.group();
    // game.add.text(game.world.width - 100, 10, 'Lives : ' + lives, { font: '34px Arial', fill: '#fff' });

    // for (var i = 0; i < 3; i++)
    // {
    //     var dude = lives.create(game.world.width - 100 + (30 * i), 60, 'hero');
    //     dude.anchor.setTo(0.5, 0.5);
    //     dude.angle = 90;
    //     dude.alpha = 0.4;
    // }

    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
}

function update() {

  game.physics.arcade.collide(player, layer);

  //  if (game.physics.arcade.collide(this.player, this.enemy)) {
  //    this.player.kill();
  //    game.state.start('Over');
  //  }
  if(player.body.y >= 227){
      //isPaused = true;
      // togglePause();
      gameOver(game);
    }


  player.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        player.body.velocity.x = -150;

        if (facing != 'left')
        {
            player.animations.play('right');
            facing = 'left';
            player.scale.x = -1;
        }
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = 150;

        if (facing != 'right')
        {
            player.animations.play('right');
            facing = 'right';
            player.scale.x = 1;
        }
    }
    else
    {
        if (facing != 'idle')
        {
            player.animations.stop();

            if (facing == 'left')
            {
                player.frame = 0;
            }
            else
            {
                player.frame = 0;
            }

            facing = 'idle';
        }
      }

    if (jumpButton.isDown && game.time.now > jumpTimer && player.body.onFloor())
    {
        player.body.velocity.y = -200;
        jumpTimer = game.time.now + 750;

    }

    if(!player.body.onFloor()){
      player.frame = 5;
    }
    else{
      if(!cursors.right.isDown && !cursors.left.isDown){
        player.frame = 0;
      }
    }

    if (enemy1.body.x < 560) {
    enemy1.body.velocity.x = 30;
    }
    if(enemy1.body.x > 590) {
    enemy1.body.velocity.x = -30;
    }

    if (enemy2.body.x < 1042) {
    enemy2.body.velocity.x = 30;
    }
    if(enemy2.body.x > 1083) {
    enemy2.body.velocity.x = -30;
    }

    if (enemy3.body.x < 1630) {
    enemy3.body.velocity.x = 30;
    }
    if(enemy3.body.x > 1676) {
    enemy3.body.velocity.x = -30;
    }

    if (enemy4.body.x < 1933) {
    enemy4.body.velocity.x = 30;
    }
    if(enemy4.body.x > 1982) {
    enemy4.body.velocity.x = -30;
    }

    if(player.body.x > 2544){
      game.destroy();
      $("#mb3").load("game4.html");
    }
  }

function render() {


}

function enemySpawn(){
  enemy1 = game.add.sprite(580, 180, "marioEnemy");
  game.physics.enable(enemy1, Phaser.Physics.ARCADE);
  enemy1.anchor.setTo(.5, .5);
  enemy1.body.bounce.y = 0;
  enemy1.body.velocity.x = -30;
  enemy1.body.collideWorldBounds = true;
  enemy1.body.setSize(16, 16, -16, 32);

  enemy2 = game.add.sprite(1080, 100, "marioEnemy");
  game.physics.enable(enemy2, Phaser.Physics.ARCADE);
  enemy2.anchor.setTo(.5, .5);
  enemy2.body.bounce.y = 0;
  enemy2.body.velocity.x = -30;
  enemy2.body.collideWorldBounds = true;
  enemy2.body.setSize(16, 16, -16, 32);

  enemy3 = game.add.sprite(1670, 100, "marioEnemy");
  game.physics.enable(enemy3, Phaser.Physics.ARCADE);
  enemy3.anchor.setTo(.5, .5);
  enemy3.body.bounce.y = 0;
  enemy3.body.velocity.x = -30;
  enemy3.body.collideWorldBounds = true;
  enemy3.body.setSize(16, 16, -16, 32);

  enemy4 = game.add.sprite(1970, 190, "marioEnemy");
  game.physics.enable(enemy4, Phaser.Physics.ARCADE);
  enemy4.anchor.setTo(.5, .5);
  enemy4.body.bounce.y = 0;
  enemy4.body.velocity.x = -30;
  enemy4.body.collideWorldBounds = true;
  enemy4.body.setSize(16, 16, -16, 32);
 }

gameOver = function(game){
  // gameOverScreen = game.add.sprite('gameOverScreen', player.body.x, player.body.y - 120);
  gameOverScreen.visible = true;
  player.kill();
  enemy1.kill();
  enemy2.kill();
  enemy3.kill();
  enemy4.kill();
  player.body.x = 25;
  player.body.y = 192;
  player.revive();
  enemySpawn();

}


function platformerFollow() {
    game.camera.follow(player, Phaser.Camera.FOLLOW_PLATFORMER);
    style = 'STYLE_PLATFORMER';
}
