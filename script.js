// COLOR THEME ROTATION AND COLOR CHANGE
const root = document.documentElement;
const Body = document.body;
const darkThemeColor = getComputedStyle(root).getPropertyValue("--font-dark-theme");
const lightThemeColor = getComputedStyle(root).getPropertyValue("--font-light-theme");
var Hamburger_box_Color = '';

// Select EVEN sections
const evenSections = document.querySelectorAll('.main Section:nth-child(even)');    
// Select ODD sections
const oddSections = document.querySelectorAll('.main Section:nth-child(odd)');

const themegif = document.getElementById("themegif");
themegif.addEventListener("click", () => {
    themegif.classList.toggle("rotate360");
    if (themegif.src.includes("theme-moon")) {
        // sets light theme 
        themegif.src = "media/theme-sun 2.png";
        root.style.setProperty("--current-theme", lightThemeColor);
        root.style.setProperty("--font-color", "black");
        Hamburger_box_Color = lightThemeColor;
        
        //document.querySelector("").style.backgroundImage = "none";
        evenSections.forEach(section => {
            section.style.backgroundImage = 'linear-gradient(180deg, #FFDEE9 29%, #B5FFFC 70%)';
        })
        oddSections.forEach(section => {
            section.style.backgroundImage = 'linear-gradient(0deg, #FFDEE9 29%, #B5FFFC 70%)';
        });

        Body.style.backgroundImage = 'linear-gradient(0deg, #FFDEE9 29%, #B5FFFC 70%)'

    } else {
        // sets dark theme
        themegif.src = "media/theme-moon 2.png";
        root.style.setProperty("--current-theme", darkThemeColor);
        root.style.setProperty("--font-color", "antiquewhite")
        Hamburger_box_Color = darkThemeColor;

        evenSections.forEach(section => {
            section.style.backgroundImage = 'linear-gradient(180deg, #3a3a3a 46%, #040404 100%)';
        });
        oddSections.forEach(section => {
            section.style.backgroundImage = 'linear-gradient(0deg, #3a3a3a 46%, #040404 100%)';
        });

        Body.style.backgroundImage = 'linear-gradient(0deg, #3a3a3a 46%, #040404 100%)';
    }
}); // Theme Changing Event ********************************



//background-color: #3a3a3a;
//background-image: linear-gradient(0deg, #3a3a3a 46%, #040404 100%);

// HAMBURGER ICON TO OPTIONS EFFECT
const hamburgerOptionBox = document.getElementById("hamburger-option-box");
const hamburgerOptionUL = document.querySelector('.hamburger-option');

const menugif = document.getElementById("menugif");
menugif.addEventListener("click", () => {
    menugif.classList.toggle("rotate360");
    if (menugif.src.includes("menu.jpg")) {
        menugif.src = "media/wrong.jpg";
        hamburgerOptionBox.style.display = "block";
        hamburgerOptionUL.style.backgroundColor = Hamburger_box_Color;
    } else {
        menugif.src = "media/menu.jpg";
        hamburgerOptionBox.style.display = "none";
    }
});


// HAMBURGER OPTIONS NAVIGATION EFFECT
const hamburgerOptionLinks = document.querySelectorAll(".hamburger-option-link");
hamburgerOptionLinks.forEach((link)=>{
    link.addEventListener("click",()=>{
        hamburgerOptionBox.style.display = "none";
        menugif.src = "media/menu.jpg";
    });
});

// TYPING TEXT ROLES ANIMATION BY CDN 
var typed = new Typed('#typed-animate', {
    strings: ['Front-End Developer', 'Web Developer'],
    typeSpeed: 40,
    backspeed: 20,
    loop: true
});


// sharing Webiste page function 
function shareWebsite() {
    if (navigator.share) {
        // Use the Web Share API to share the image
        navigator.share({
            text: 'Check out My awesome Portfolio',
            url: 'https://praveendas.netlify.app/',
        })
        .then(() => console.log('Shared successfull'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
        alert('Web Share API is not supported on this browser.');
    }
}