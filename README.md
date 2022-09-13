# What's My Name

## Link
http://whatsmyname.tech/

## About
This is a random name generator. You have the option to choose if you want to generate a first or last name. If you choose to generate a first name you have the option of choosing gender. 

## Inspiration
As a hobby, I write short stories and scripts. I often use the same names like Chris, Michael, Anna and Sarah. I thought a random name generator would be a nice way to generate more names for my stories and scripts as well as creating a simple front end project.

## Code Design 
The tech stack is HTML, CSS, JavaScript. Each action button leads to a new page. To determine if a user choose first or last name I have an onclick listener attached to the 'Next' button. Once the 'Next' button is clicked, the function selectionMade() is called which based on the item checked, will determine the next page displayed. If 'Last Name' is checked, the lastNames() method is called and a last name is displayed. If 'First Name' is checked, a page with gender options are shown. Based on the item checked, will determine which page is displayed. I used localStorage to display the names which in return I had to create a different page for each result. I decided to use one CSS file for styling since there is not much styles between the different files.

## UI Design
Since this was a simple web application, I decided to create a minimal design. The background image is from [Open Peeps](https://www.openpeeps.com/) by Pablo Stanley. I used the Figma file to create the background by grouping individual peeps together and changing some of their characteristics (e.g. skin color) to create diversity among the peeps. The peeps are the sole background which is position center bottom for each page. Since I wanted to keep the webpage white and the peeps shared the color black, I decided to have a black and white scheme for font color and buttons. 

## Improvements
- [ ] Make the web application responsive
- [ ] Store the names in a JSON format or text file 
- [ ] Spice up the UI, while keeping it minimal
- [ ] Include names of different languages 