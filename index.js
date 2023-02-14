document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

document.body.scrollTop = 0;

//dropdown
var pg1 = document.querySelector(".fa-caret-down");
var dropdown = document.querySelector(".dropdown-items");
pg1.addEventListener("click", function() {
    this.classList.toggle("rotate");
    dropdown.classList.toggle("block");
    console.log("hello");
});

//hamburger

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
};

//sidenav content display
var dropdown = document.getElementsByClassName("dropdown-nav");
var dropdown2 = document.querySelector(".dropdown-items");
var activerightmenu = document.querySelector(".testlink");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        //var dropdownContent = this.nextElementSibling;
        if (dropdown2.style.display === "block") {
            dropdown2.style.display = "none";
        } else {
            dropdownContent.style = "block";
        };

    });
    //  activerightmenu.style.fontWeight = "700";
};

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.sidebar .nav-link').forEach(function(element) {

            element.addEventListener('click', function(e) {

                let nextEl = element.nextElementSibling;
                let parentEl = element.parentElement;

                if (nextEl) {
                    e.preventDefault();
                    let mycollapse = new bootstrap.Collapse(nextEl);

                    if (nextEl.classList.contains('show')) {
                        mycollapse.hide();
                    } else {
                        mycollapse.show();
                        // find other submenus with class=show
                        var opened_submenu = parentEl.parentElement.querySelector('.submenu.show');
                        // if it exists, then close all of them
                        if (opened_submenu) {
                            new bootstrap.Collapse(opened_submenu);
                        }
                    }
                }
            }); // addEventListener
        }) // forEach
});
// DOMContentLoaded  end

//Change Page

let Home = document.querySelector(".Home");
let Home2 = document.querySelector("#Homes");
let midsection = document.querySelector("#mid-sec");
let homecontent = document.querySelector(".mainhome");
let weber = document.querySelector("#webermenu");
let human360mobile = document.querySelector("#human360menu");
let helpdeskmobile = document.querySelector("#helpdeskmenu");
let weber2 = document.querySelector("#webermenu2");
let human360 = document.querySelector("#human360");
let human360click = document.querySelector("#human360click");
let helpdeskbtn = document.querySelector("#helpdeskclick");
let iambtn = document.querySelector("#IAMclick");
let Assentorybtn = document.querySelector("#AssentoryClick")


Home.addEventListener("click", () => {

    homecontent.style.display = 'Block';
    homecontent.style.visibility = 'visible'
    midsection.style.display = 'none';
    midsection.style.visibility = 'hidden'
    human360.style.display = 'none';
    human360.style.visibility = 'hidden';
    helpdesk.style.display = 'none';
    helpdesk.style.visibility = 'hidden';
    IAM.style.display = 'none';
    IAM.style.visibility = 'hidden';
    Assentory.style.display = 'none';
    Assentory.style.visibility = 'hidden';
}, false);

Home2.addEventListener("click", () => {

    homecontent.style.display = 'Block';
    homecontent.style.visibility = 'visible'
    midsection.style.display = 'none';
    midsection.style.visibility = 'hidden';
    human360.style.display = 'none';
    human360.style.visibility = 'hidden'
    helpdesk.style.display = 'none';
    helpdesk.style.visibility = 'hidden';
    IAM.style.display = 'none';
    IAM.style.visibility = 'hidden';
    Assentory.style.display = 'none';
    Assentory.style.visibility = 'hidden';
}, false);



weber.addEventListener("click", () => {
    homecontent.style.display = 'none';
    homecontent.style.visibility = 'hidden';
    midsection.style.display = 'flex';
    midsection.style.visibility = 'visible';
    human360.style.display = 'none';
    human360.style.visibility = 'hidden';
    helpdesk.style.display = 'none';
    helpdesk.style.visibility = 'hidden';
    IAM.style.display = 'none';
    IAM.style.visibility = 'hidden';
    Assentory.style.display = 'none';
    Assentory.style.visibility = 'hidden';
}, false)
weber2.addEventListener("click", () => {
    homecontent.style.display = 'none';
    homecontent.style.visibility = 'hidden'
    midsection.style.display = 'flex';
    midsection.style.visibility = 'visible';
    human360.style.display = 'none';
    human360.style.visibility = 'hidden';
    helpdesk.style.display = 'none';
    helpdesk.style.visibility = 'hidden';
    IAM.style.display = 'none';
    IAM.style.visibility = 'hidden';
    Assentory.style.display = 'none';
    Assentory.style.visibility = 'hidden';
}, false);

human360click.addEventListener("click", () => {
    human360.style.display = 'flex';
    human360.style.visibility = 'visible';
    homecontent.style.display = 'none';
    homecontent.style.visibility = 'hidden';
    midsection.style.display = 'none';
    midsection.style.visibility = 'hidden';
    helpdesk.style.display = 'none';
    helpdesk.style.visibility = 'hidden';
    IAM.style.display = 'none';
    IAM.style.visibility = 'hidden';
    Assentory.style.display = 'none';
    Assentory.style.visibility = 'hidden';
}, false);
human360mobile.addEventListener("click", () => {
    human360.style.display = 'flex';
    human360.style.visibility = 'visible';
    homecontent.style.display = 'none';
    homecontent.style.visibility = 'hidden';
    midsection.style.display = 'none';
    midsection.style.visibility = 'hidden';
    helpdesk.style.display = 'none';
    helpdesk.style.visibility = 'hidden';
    IAM.style.display = 'none';
    IAM.style.visibility = 'hidden';
    Assentory.style.display = 'none';
    Assentory.style.visibility = 'hidden';
}, false);

helpdeskbtn.addEventListener("click", () => {
    helpdesk.style.display = 'flex';
    helpdesk.style.visibility = 'visible';
    human360.style.display = 'none';
    human360.style.visibility = 'hidden';
    homecontent.style.display = 'none';
    homecontent.style.visibility = 'hidden';
    midsection.style.display = 'none';
    midsection.style.visibility = 'hidden';
    IAM.style.display = 'none';
    IAM.style.visibility = 'hidden';
    Assentory.style.display = 'none';
    Assentory.style.visibility = 'hidden';
}, false);
helpdeskmobile.addEventListener("click", () => {
    human360.style.display = 'flex';
    human360.style.visibility = 'visible';
    homecontent.style.display = 'none';
    homecontent.style.visibility = 'hidden';
    midsection.style.display = 'none';
    midsection.style.visibility = 'hidden';
    helpdesk.style.display = 'none';
    helpdesk.style.visibility = 'hidden'
    IAM.style.display = 'none';
    IAM.style.visibility = 'hidden';
    Assentory.style.display = 'none';
    Assentory.style.visibility = 'hidden';
}, false);

iambtn.addEventListener("click", () => {
    IAM.style.display = 'flex';
    IAM.style.visibility = 'visible';
    helpdesk.style.display = 'none';
    helpdesk.style.visibility = 'hidden';
    human360.style.display = 'none';
    human360.style.visibility = 'hidden';
    homecontent.style.display = 'none';
    homecontent.style.visibility = 'hidden';
    midsection.style.display = 'none';
    midsection.style.visibility = 'hidden'
    Assentory.style.display = 'none';
    Assentory.style.visibility = 'hidden';
}, false);

Assentorybtn.addEventListener("click", () => {
    Assentory.style.display = 'flex';
    Assentory.style.visibility = 'visible';
    IAM.style.display = 'none';
    IAM.style.visibility = 'hidden';
    helpdesk.style.display = 'none';
    helpdesk.style.visibility = 'hidden';
    human360.style.display = 'none';
    human360.style.visibility = 'hidden';
    homecontent.style.display = 'none';
    homecontent.style.visibility = 'hidden';
    midsection.style.display = 'none';
    midsection.style.visibility = 'hidden'
}, false);

function myFunction(element, clr) {
    element.style.color = clr;
};

var shiftWindow = function() { scrollBy(0, -120) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);


// Get all sections that have an ID defined
const sections = document.querySelectorAll("Div[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {

    // Get current scroll position
    let scrollY = window.pageYOffset;

    // Now we loop through sections to get height, top and ID values for each
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        /*
        - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
        - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
        */
        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ) {
            document.querySelector(".sidebar a[href*=" + sectionId + "]").classList.add("active !important");
        } else {
            document.querySelector(".sidebar a[href*=" + sectionId + "]").classList.remove("active !important");
        }
    });
}




// ScrollRestoration

// window.onbeforeunload = function () {
//   window.scrollTo(0,0);
// };

// var mainB = document.getAnimations("mainbody")
// var sLink = document.querySelectorAll(".sublink");
// $("#mainbody").scrollTop(0);
// $(sLink).click(scrollT)

// window.onload = function() {
//     window.onscroll = function() {
//         var doc = document.body,
//             scrollPosition = doc.scrollTop,
//             pageSize = (doc.scrollHeight - doc.clientHeight),
//             percentageScrolled = Math.floor((scrollPosition / pageSize) * 100);

//         if (percentageScrolled >= 10) { // if the percentage is >= 10, scroll to top
//             window.scrollTo(0, 0);
//         }
//     };
// };

// function scrollT() {

//     if (history.scrollRestoration) {
//         history.scrollRestoration = 'manual';
//     } else {
//         mainB.onbeforeunload = function() {
//             mainB.scrollTo(0, 0);
//         }
//     }
//     $("#mainbody").scrollTop(0);
// }

// history.scrollRestoration = "manual";

// $("#mainbody").on('beforeunload', function() {
//     $("#mainbody").scrollTop(0);
// });

// var shiftWindow = function() { scrollBy(0, -50) };
// if (location.hash) shiftWindow();
// window.addEventListener("hashchange", shiftWindow);