var game = new Phaser.Game(480, 240, Phaser.CANVAS, 'mb4', { preload: preload, create: create, update: update, render: render });

var Keys = Phaser.Keyboard;

function preload() {
    game.load.tilemap('map', 'assets/marioMap4.json', null, Phaser.Tilemap.TILED_JSON);
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

    game.time.desiredFps = 30;

    map = game.add.tilemap('map');

    map.addTilesetImage('marioTileset');

    layer = map.createLayer('Tile Layer 1');

    layer.resizeWorld();

    map.setCollisionBetween(1, 15);
    map.setCollisionByIndex(4);
    map.setCollisionByIndex(25);
    map.setCollisionByIndex(168);
    map.setCollisionByIndex(797);

    player = game.add.sprite(25, 82, 'hero');
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

    game.world.setBounds(0, 0, 2560, 240, "map");

    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
}

function update() {

  game.physics.arcade.collide(player, layer);

  if(lives <= 0){
    game.destroy();
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
        player.body.velocity.y = -240;
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

    if (enemy1.body.x < 257) {
    enemy1.body.velocity.x = 30;
    }
    if(enemy1.body.x > 420) {
    enemy1.body.velocity.x = -30;
    }

    if (enemy2.body.x < 1248) {
    enemy2.body.velocity.x = 30;
    }
    if(enemy2.body.x > 1372) {
    enemy2.body.velocity.x = -30;
    }

    if (enemy3.body.x < 1968) {
    enemy3.body.velocity.x = 30;
    }
    if(enemy3.body.x > 1985) {
    enemy3.body.velocity.x = -30;
    }

    if(player.body.x > 2616){
      game.destroy();
      $("#mb1").load("game3.html");
    }

    if(player.body.y > 226){
      fallInHole();
    }
  }

function render() {

}

function fallInHole(){
  player.body.x = 25;
  player.body.y = 86;
  lives -= 1;
  enemy1.kill();
  enemy2.kill();
  enemy3.kill();
  enemySpawn();
}

function enemySpawn(){
  enemy1 = game.add.sprite(400, 100, "marioEnemy");
  game.physics.enable(enemy1, Phaser.Physics.ARCADE);
  enemy1.anchor.setTo(.5, .5);
  enemy1.body.bounce.y = 0;
  enemy1.body.velocity.x = -30;
  enemy1.body.collideWorldBounds = true;
  enemy1.body.setSize(16, 16, 0, 96);

  enemy2 = game.add.sprite(1368, 180, "marioEnemy");
  game.physics.enable(enemy2, Phaser.Physics.ARCADE);
  enemy2.anchor.setTo(.5, .5);
  enemy2.body.bounce.y = 0;
  enemy2.body.velocity.x = -30;
  enemy2.body.collideWorldBounds = true;
  enemy2.body.setSize(16, 16, 0, 96);

  enemy3 = game.add.sprite(1980, 200, "marioEnemy");
  game.physics.enable(enemy3, Phaser.Physics.ARCADE);
  enemy3.anchor.setTo(.5, .5);
  enemy3.body.bounce.y = 0;
  enemy3.body.velocity.x = -30;
  enemy3.body.collideWorldBounds = true;
  enemy3.body.setSize(16, 16, 0, 32);

 }

function platformerFollow() {
    game.camera.follow(player, Phaser.Camera.FOLLOW_PLATFORMER);
    style = 'STYLE_PLATFORMER';
}
