/*
* FileName: app.js
*
* @author Meer
* @date june 7, 2016
*
* StudentID: 300522487
* website: http://comp125-lab3.azurewebsites.net/
* @description: This file is the main javascript file for the website
*/
// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";

// for console used for testing
    switch (document.title) {
        case "Home":
            console.log("You're at home")
            break;
        case "About Me":
            console.log("Your're at About Me page")
            break;
    }
    
// for console used for testing
    console.log(document.URL);

})();