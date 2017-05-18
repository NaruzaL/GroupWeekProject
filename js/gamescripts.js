var game = new Phaser.Game(480, 240, Phaser.CANVAS, 'mb-1', { preload: preload, create: create, update: update, render: render });

var Keys = Phaser.Keyboard;

function preload() {
    game.load.tilemap('map', 'assets/marioMap.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('marioTileset', 'assets/marioTileset.png');
    game.load.image('marioEnemy', 'assets/marioEnemy.png', 16, 16, 1);
    game.load.spritesheet('hero', 'assets/marioCharacters.png', 16.6, 16.6,);
}

  var map;
  var cursors;
  var layer;
  var facing = 'left';
  var jumpButton;
  var jumpTimer = 0;
  var player;
  var enemy;
  var scaleWindow;



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
    map.setCollisionByIndex(266);// top left pipe
    map.setCollisionByIndex(265);//top right pip
    map.setCollisionByIndex(298);//left pipe shaft
    map.setCollisionByIndex(299);//right pipe shaft
    map.setCollisionByIndex(67);// Ground
    map.setCollisionByIndex(68);// Bricks
    map.setCollisionByIndex(91);// Question block
    map.setCollisionByIndex(100);// Flat brick
    map.setCollisionByIndex(37); // Platform in 2nd level
    map.setCollisionByIndex(25);
    map.setCollisionByIndex(34);

    map.setCollisionByIndex(267);
    map.setCollisionByIndex(268);
    map.setCollisionByIndex(300);
    map.setCollisionByIndex(301);

    player = game.add.sprite(25, 208, 'hero');
    game.physics.enable(player, Phaser.Physics.ARCADE);

    player.anchor.setTo(.5,.5);
    player.body.bounce.y = 0;
    player.body.collideWorldBounds = true;
    player.body.setSize(8, 8, 8, 8);
    // player.body.collides(enemyCG);

    player.animations.add('right', [0,1,2,3], 12, true);
    player.animations.add('turn', [4], 12, true);

    enemy = game.add.sprite(160, 190, "marioEnemy");
    game.physics.enable(enemy, Phaser.Physics.ARCADE);
    enemy.anchor.setTo(.5, .5);
    enemy.body.bounce.y = 0;
    enemy.body.velocity.x = -30;
    enemy.body.collideWorldBounds = true;
    enemy.body.setSize(16, 16, -16, 32);

    enemy = game.add.sprite(1860, 190, "marioEnemy");
    game.physics.enable(enemy, Phaser.Physics.ARCADE);
    enemy.anchor.setTo(.5, .5);
    enemy.body.bounce.y = 0;
    enemy.body.velocity.x = -30;
    enemy.body.collideWorldBounds = true;
    enemy.body.setSize(16, 16, -16, 32);

    enemy = game.add.sprite(1160, 190, "marioEnemy");
    game.physics.enable(enemy, Phaser.Physics.ARCADE);
    enemy.anchor.setTo(.5, .5);
    enemy.body.bounce.y = 0;
    enemy.body.velocity.x = -30;
    enemy.body.collideWorldBounds = true;
    enemy.body.setSize(16, 16, -16, 32);

    enemy = game.add.sprite(1460, 190, "marioEnemy");
    game.physics.enable(enemy, Phaser.Physics.ARCADE);
    enemy.anchor.setTo(.5, .5);
    enemy.body.bounce.y = 0;
    enemy.body.velocity.x = -30;
    enemy.body.collideWorldBounds = true;
    enemy.body.setSize(16, 16, -16, 32);

    game.camera.follow(player);

    game.physics.arcade.gravity.y = 300;

    game.world.setBounds(0, 0, 3408, 240, "map");

    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
}

function update() {

  game.physics.arcade.collide(player, layer);
  game.physics.arcade.collide(player, enemy);

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
        player.body.velocity.y = -250;
        jumpTimer = game.time.now + 750;
        // player.frame = 5;
    }

    if(!player.body.onFloor()){
      player.frame = 5;
    }
    else{
      if(!cursors.right.isDown && !cursors.left.isDown){
        player.frame = 0;
      }
    }

      if(player.body.y < 0){
        playerDeath();
    }

    if(!player.body.onFloor()){
      player.frame = 5;
    }

    if(player.body.x > 3168){
      game.destroy();
      $("#mb1").load("game2.html");
    }
  }

function render() {


}

function platformerFollow() {
    game.camera.follow(player, Phaser.Camera.FOLLOW_PLATFORMER);
    style = 'STYLE_PLATFORMER';
}
