# Group Project Launch Page

####  _May 18th, 2017_

#### By _**Pete Lazuran, Hunter Parks, Guy Anderson, Jun Fritz**_

## Description
Our group week project is a Super Mario game remake.  This project consists of two separate parts, a launch page to introduce the game and instructions, as well as two possible levels of game play.  The launch page consists of tools learned in our first five weeks at Epicodus.  The gameplay level's were created using the Phaser framework.   

## Specifications
|Launch Page Behavior| Input (User Action/Selection)| Output (Program Action)|
|---|---|---|
|Program will display and hide section with separate content|No Input Required|"Front Page"|
|Program will display moving "mario" themed background|No Input Required|Display "Background Scrolling"|
|Program will display or hide program collaborators|"About Me"|Display "Collaborator Bio's"|
|Program will send user to individual collaborator's Github account in new tab|"Guy"|Display "github.com...guyanderson" page|
|Program will display or hide instructions on how to play|"How to Play"|Display "Game Nav" and "Game Goals"|
|Program will initiate game start with play button|"Play"|Display "Enter Your Username"|
|Program will gather user name as input|Enter "GuyRocks"|Display "GuyRocks"|
|Program will display options of level 1 or level 2|No Input Required|Display "Level 1" & "Level 2"|
|Program will send user to Apple store or GooglePlay in new tab|"GooglePlay"|Display "GooglePlay" webpage|
|Program will send user to Level 1 Game if selected|"Level1"|Display "Level1" game page|
|Program will send user to Level 2 Game if selected|"Level2"|Display "Level2" game page|


|Game Behavior| Input (User Action)| Output (Program Action)|
|---|---|---|
|Program will start character at bottom left-most position|No Input Required|Display Character|
|Program will move character using left and right arrow keys|"right arrow key" or "left arrow key"|Display Character move to the right or left|
|Program will allow character to jump using spacebar|"spacebar"|Display Character moving vertically|
|Program will traverse through sprite sheet to display sprite movement|"right arrow key"|Display Character facing right with movement|
|Program will scroll background to consistently match character movement|"right arrow key"|Display background movement right|
|Program will stop character from moving if there is a collision between objects|"Mario" walking against "Tube"|Display no movement for "Mario" and "Tube"|
|Program will deploy enemies randomly throughout the game to avoid|No Input Required|Display "Mario Enemies"|
|Program will end game if character falls in "hole"|"Mario" falls in hole|Display "Game Over"|
|Program will end game if character reaches and touches flag pole sprite|"Mario" touches "flagpole"|Display "Winner!"|



## Gh-pages

JMFritz.github.io/GroupWeekProject

## Setup/Installation Requirements

* Go to Github repository page.
* Click the "download or clone" button and copy the link.
* In your computers terminal type "git clone" & paste the copied link.
* Once downloaded you can open the index.html file in the browser of your choice.
* For game play alterations, refer to javascript files (gamescripts.js, game2.js, game3.js, OR game4.js).
* For launch page alterations, refer to index.html, scripts.js, and styles.css.
* Alter Mp3 files and background music on each html file through div class named "audio".
* View the code using the text editor of your choice.

## Known bugs

* Enemies do not inflict damage or end life upon character collision.
* Only able to implement remaining 3 levels through completion of level 1.

## Support and contact details

Contact pdlazuran@gmail.com, hunter.thomas.parks@gmail.com, luckythelich@hotmail.com, jun.fritz@gmail.com with any comments, concerns, or questions.

## Technologies Used

_HTML, CSS, JavaScript, jQuery, Bootstrap, Phaser Framework, Tiled Map Editor_

### License

MIT

Copyright (c) 2017 **_Pete Lazuran,_** **_Hunter Parks,_** **_Guy Anderson,_** **_Jun Fritz_**
