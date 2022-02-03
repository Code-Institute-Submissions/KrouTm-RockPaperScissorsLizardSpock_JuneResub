# RockPaperScissorsLizardSpock
 RockPaperScissorsLizardSpock Project

<> index.html

- All game design was inspired by mickey and his classic colors.

NUMBER OF MACHES

- There are only three options: "Two out of three", "Three out of five" and "To infinity... and beyond!", the first two are easy to understand, the first option is three points on total and the second is five, but the third is "infinite" points, in JavaScript code the limit is 9999 haha, I left this option just for fun, if I were this site for the public, I wouldn't have this option available, as there is no space for three-digit numbers on the game's scoreboard.

<> Game.html

- I spent a lot of time on this part of the site, in particular, the layout is simple but with integration to be objective.
- The site is available for screens 320px until larger screens like full HD.

HOUSE

- Home to return to index page and hire home screen for home exit, operator can choose home screen and choose other option (number of moves).
- Before it was only written "Home", but I decided to play the word for an icon (all icons in the game are from Font Awesome), the text of changing the word to an icon was because I wanted it to take up less space on the screen, leaving it like this the cleanest look.

RESTART

- As well as the "Home" button, the "Reset" button has also been replaced by an icon, for synchronized replacements.
- The "Restart" button refreshes the <> Game.html page.

SCOREBOARD

- The Score Board is just an attempt to mimic the shape of Mickey's head, without much ado. On the left ear is written "User" which should indicate to the user that the left side of the game (Dots on the Board and Mickey's Hands on the left side) belongs to the user and the right side belongs to the PC.
- As I said, the numbers on the scoreboard were visually pretty monkeys, as long as the number on both sides of the players was at most two digits, plus the numbers were off the board. I could solve this by just giving a point limit like 99, but I thought there was no need for that at the moment.

HANDS

- The hands I drew on Krita and I used an image from Google to help me. I couldn't find images of hands in the formats I wanted with a transparent background to use on the site.
- If I had more time I would like to improve the appearance of the hands and the site in general as it's very simple in my opinion.

MAKE YOUR CHOICE:

- This sentence changes after the movements are made, through JavaScript code, the sentence can tell if the user beats or lost to the computer.
- I admit that the phrase is kind of boring, it informs the player in a tedious way, I would like I had thought a better way to show it to the users. I imagine the player wouldn't find it fun to read phrases like that hahaha. The sentence changes whenever the result is different from the previous one, but it's more like to show knowloge of programing.

YOU LOSE & YOU WIN

- It's just a sentence that appears at the end of the game saying if the user won or lost adding up the total points of each one.

BUGS AND SETTINGS

1. The first bug as I mentioned above, is the infinite points option, I hope you understand that I could have written a more rational option, but I didn't think it was necessary and decided to keep it. It was easier to test my codes with this option available.

2. The second problem which is not necessarily a bug or bug, but something that could be improved, is the phrase "Make your choice:", I would like to add something that the user doesn't need to read.

3. If the user presses the button (Font Awesome icons) many times and too fast consecutively, the points or the hand animation would not work as they should, some points will not be added for not having had "time enough", then the user will not know why the PC or the user himself earned points, the code waits for all the animation to be done to show the points and I didn't write any way to prevent the user from pressing the button like that.

4. Although there is a phrase that states whether the user won or the PC, the phrase only appears if the user clicks on the icons again.

5. These were the main errors I have at the moment (besides the appearance of the site that could be infinitely better), but with the basic knowledge I already have in Python, I didn't have great difficulties in understanding and writing the code. JS has some differences like having 3 types of variables, the way you call a variable and how you connect the three files (HTML, CSS and JS) was a challenge at first but it works like if, elif, else, def and random Python and JS functions are similar just written differently so to speak.