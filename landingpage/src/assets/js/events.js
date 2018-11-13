// /**
//  * Events Class
//  */

// class Events {

//     /**
//      * Constructor
//      */
//     constructor() {
//         this.burger = document.querySelector('.burger');
//         this.menu = document.querySelector('.sidenav');
//         this.nav = document.querySelector('.navbar');
//         this.window = window;
//     }

//     /**
//      * Method - Open Menu + Burger Animation
//      */
//     openMenu() {
//         this.burger.addEventListener('click', event => {
//             this.burger.classList.toggle('state-open');
//             this.menu.classList.toggle('is-open');
//             this.nav.classList.toggle('noshadow');
//             event.preventDefault();
//         });
//     }
// }

// /**
//  * Initialization
//  */
// document.onreadystatechange = () => {
//     if (document.readyState === "complete") {
//         let events = new Events();
//         events.openMenu();
//     }
// }

