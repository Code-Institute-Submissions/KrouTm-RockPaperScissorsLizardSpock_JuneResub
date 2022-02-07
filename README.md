# RockPaperScissorsLizardSpock
 RockPaperScissorsLizardSpock Project

<> index.html

![alt text](https://github.com/KrouTm/RockPaperScissorsLizardSpock/blob/main/screenshots/screenshots.png?raw=true)

All game design was inspired by mickey and his classic colors.

NUMBER OF MACHES

- There are only three options: "Two out of three", "Three out of five" and "To infinity... and beyond!", the first two are easy to understand, the first option is three points on total and the second is five, but the third is "infinite" points, in JavaScript code the limit is 9999 haha, I left this option just for fun, if I were this site for the public, I wouldn't have this option available, as there is no space for three-digit numbers on the game's scoreboard.

<> Game.html

![alt text](https://github.com/KrouTm/RockPaperScissorsLizardSpock/blob/main/screenshots/screenshots2.png?raw=true)

- I spent a lot of time on this part of the site, in particular, the layout is simple but with integration to be objective.
- The site is available for screens 320px until larger screens like full HD.

HOME

![alt text](https://github.com/KrouTm/RockPaperScissorsLizardSpock/blob/main/screenshots/home.PNG?raw=true)

- Home to return to index page and hire home screen for home exit, operator can choose home screen and choose other option (number of moves).
- Before it was only written "Home", but I decided to play the word for an icon (all icons in the game are from Font Awesome), the text of changing the word to an icon was because I wanted it to take up less space on the screen, leaving it like this the cleanest look.

RESTART

![alt text](https://github.com/KrouTm/RockPaperScissorsLizardSpock/blob/main/screenshots/restart.PNG?raw=true)

- As well as the "Home" button, the "Reset" button has also been replaced by an icon, for synchronized replacements.
- The "Restart" button refreshes the <> Game.html page.

SCOREBOARD

![alt text](https://github.com/KrouTm/RockPaperScissorsLizardSpock/blob/main/screenshots/scoreboard.PNG?raw=true)

- The Score Board is just an attempt to mimic the shape of Mickey's head, without much ado. On the left ear is written "User" which should indicate to the user that the left side of the game (Dots on the Board and Mickey's Hands on the left side) belongs to the user and the right side belongs to the PC.
- As I said before, if the player plays enough times to have a score of 3 digits or more, the numbers come out of the board.

HANDS

![alt text](https://github.com/KrouTm/RockPaperScissorsLizardSpock/blob/main/screenshots/hands.PNG?raw=true)

- The hands I had to draw on Krita and I used Google images to help me. I couldn't find images of hands in the formats I wanted with a transparent background to use on the site.
- If I had more time I would like to improve the appearance of the hands and the site in general as it is very simple in my opinion.

MAKE YOUR CHOICE:

![alt text](https://github.com/KrouTm/RockPaperScissorsLizardSpock/blob/main/screenshots/makeyourchoice.PNG?raw=true)

- This sentence changes after the movements are made, through JavaScript code, the sentence can tell if the user beats or lost to the computer.
- The phrase is kind of boring, it informs the player in a tedious way, I would like I had thought of a better way to show it to the user. I imagine the player wouldn't find it fun to read phrases like these hahaha. The sentence changes whenever the result is different from the previous one.

YOU LOSE & YOU WIN

![alt text](https://github.com/KrouTm/RockPaperScissorsLizardSpock/blob/main/screenshots/lose.PNG?raw=true)
![alt text](https://github.com/KrouTm/RockPaperScissorsLizardSpock/blob/main/screenshots/win.PNG?raw=true)

- It's just a sentence that appears at the end of the game saying if the user won or lost adding up the total points of each one.

BUGS AND SETTINGS

1. The first bug as I mentioned above, is the infinite points option, I hope you understand that I could have written a more rational option, but I didn't think it was necessary and decided to keep it. It was easier to test my codes with this option available.

2. The second problem which is not necessarily a bug or bug, but something that could be improved, is the phrase "Make your choice:", I would like to add something that the user doesn't need to read.

3. If the user presses the button (Font Awesome icons) many times and too fast consecutively, the points or the hand animation would not work as they should, some points will not be added for not having had "time enough", then the user will not know why the PC or the user himself earned points, the code waits for all the animation to be done to show the points and I didn't write any way to prevent the user from pressing the button like that.

4. Although there is a phrase that states whether the user won or the PC, the phrase only appears if the user clicks on the icons again.

5. When the screen is very wide, the user has to scroll up to see the scoreboard and down to choose a new move. This can make the user experience bad.

6. For some reason, when the screen is smaller than 768px the "Make your choice" icons don't work. The hover functions, JS commands and click don't exist and I couldn't solve the problem.