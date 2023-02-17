# Punk API App
This is a React project I did during week 6 of my _nology course, where I learnt how to create and use components (both container and display), use fetch requests, react hooks such as useRef, useEffect and React Testing Library.
You can view the project via github pages using this link: [https://dexterfreeman.github.io/punk/](https://dexterfreeman.github.io/punk/). 


## Stack: 

React, HTML, SCSS 

## Functionality: 
- Fetches data from the Punk API and displays them on cards. 
- Cards contain the beers information; their name, description and a picture.
- You can filter the beers using either the search bar or checkboxs in the nav bar.
- The webpage also includes a simple animation for rendering the cards using the autoAnimate package: https://auto-animate.formkit.com/
## Logic: 

To filter the data, I simply just filtered the fetched API data by checking if the beer's name includes the search term, and then checked the other filteres in the same way with their corresponding keys. Except for the classic range, as that is any beer crafted before 2010, so I had to split the first_brewed key in the beer object, so that I could get just the year as the entire string includes the specific date. 

The checkboxs change a useState from true to false which are then passed into the MainContent container props in order to know which filter is currently on, the search bar simply passes it's value as I can check if there is one depending on whether that value is empty or not. 


![image of project](https://s9.gifyu.com/images/giffcae2454462e5e46.gif)
