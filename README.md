# RockPaperScissorsLizardSpock
 RockPaperScissorsLizardSpock Project

<> index.html

- In this one, it is possible to choose the number of bids, the third to test and make a joke because if I were this site for the public, I wouldn't have this option, as there is no space for three-digit numbers on the game's scoreboard.
- All game design was inspired by mickey and his classic colors.

NUMBER OF MACHINES

- There are only three options: "Two out of three", "Three out of five" and "To infinity... and beyond!", the first two are easy to understand, the first option who scores three points the first wins and the second is five, but the third is "infinite" the number of points, in JavaScript code the limit is 9999 haha, I left this option just for fun.

<> Game.html

- I spent a lot of time on this part of the site, in particular, the layout is simple but with integration to be objective.
- The site is available for screens smaller than 320px for larger screens like full HD.

HOUSE

- Boot to return to home screen and hire home screen for home exit, operator can choose home screen and choose other option (number of moves).
- Before it was only written "Home", but I decided to play the word for an icon (all icons in the game are from Font Awesome), the text of changing the word to an icon was because I wanted it to take up less space on the screen, leaving it like this the cleanest look.

RESTART

- As well as the "Home" button, the "Reset" button has also been replaced by an icon, for synchronized replacements.
- The "Restart" button refreshes the <> Game.html page.

SCOREBOARD

- The Score Board is just an attempt to mimic the shape of Mickey's head, without much ado. On the left ear is written "User" which should indicate to the user that the left side of the game (Dots on the Board and Mickey's Hands on the left side) belongs to the user and the right side belongs to the PC.
- As I said, the numbers on the scoreboard were visually pretty monkeys, as long as the number on both sides of the players was at most two digits, plus the numbers were off the board. I could solve this by just giving a point limit like 99, but I thought there was no need for that at the moment.

HANDS

- The hands I had to draw (I drew in Krita) and I used Google images to help me. I couldn't find images of hands in the formats I wanted with a transparent background to use on the site.
- If I had more time I would like to improve the appearance of the hands and the site in general as it is very simple in my opinion.

MAKE YOUR CHOICE:

- This sentence changes after the movements are made, through JavaScript code, the sentence can tell if the user crashed or lost the computer.
- The phrase is kind of boring, it informs the player in a tedious way, I wish I had thought of a better way to bring this to the user. I imagine the player wouldn't find it fun to read phrases like these hahaha. The sentence changes whenever the result of the bid made is different from the previous one, but with more time available I could have saved it for the code to detect when the game ends and show a sentence on the screen informing the user that the game is and also adding and comparing each player's points and determining who has the most points is the winner.

ERRORS AND SETTINGS

1. The first bug as I mentioned above, is the infinite points option, I hope you understand that I could have written a more rational option, but I didn't think it was necessary and decided to keep it. It was easier to test my codes with this option available.

2. The second problem which is not necessarily a bug or bug, but something that could be improved, is the phrase "Take your pick:", it would take much longer for me to find a better and clearer way to bring updates to the user of how the game is proceeding. I would like to add something that the user doesn't need to read, it can be a demo image or a visual action, and the fact that the player has to declare himself a winner or a loser since the code doesn't warn when the game ends and who won or lost in the game. round.

3. These were the main errors I have at the moment (besides the appearance of the site that could be infinitely better), but with the basic knowledge I already have in Python, I didn't have great difficulties in understanding and writing the code. JS has some differences like having 3 types of variables, the way you call a variable and how you connect the three files (HTML, CSS and JS) was a challenge at first but it works like if, elif, else, def and random Python and JS functions are similar just written differently so to speak.