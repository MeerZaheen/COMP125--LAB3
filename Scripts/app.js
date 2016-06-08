/*
* FileName: app.js
*
* @author Meer
* @date june 6, 2016
*
* StudentID: 300522487
* website: azure link
* @description: This file is the main javascript file for the website
*/

//var app = {}; // object notation or var app = new Object();
// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";

    /*
    * This function uses the document.title to switch JavaScript function when the page switches
    *
    * @function PageSwitcher
    * @returns {void}
    */
    function Pageswitcher() {

        // for console used for testing
        switch (document.title) {
            case "Home":
                Home();
                break;
            case "About Me":
                About();
                break;
            case "Contact Me":
                Contact();
                break;
            case "Projects":
                Projects();
                break;
        }
    }
    /*
    * This function provides JavaScript codes for the Home Page
    *
    * @function Home
    * @returns {void}
    */
    function Home() {
        console.log("You are at the Home Page");
    }
    /*
    * This function provides JavaScript codes for the About Page
    *
    * @function Home
    * @returns {void}
    */
    function About() {
        console.log("You are at the About Me Page");
    }
    /*
    * This function provides JavaScript codes for the Contact Page
    *
    * @function Home
    * @returns {void}
    */
    function Contact() {
        console.log("You are at the Contact Page");
    }/*
    * This function provides JavaScript codes for the Project Page
    *
    * @function Home
    * @returns {void}
    */
    function Projects() {
        console.log("You are at the Projects Page");
    }

    // for console used for testing: console.log(document.URL);
    // document.body.onload = PageSwitcher;
    // document.body.addEventListener("load", Pageswitcher);
    window.addEventListener("load", PageSwitcher);

})();