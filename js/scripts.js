let pageNum = 1; //Home Page default

const homeElement = document.getElementById("home_content");
const projectsElement = document.getElementById("projects_content");
const contactElement = document.getElementById("contact_content");
const mainContentBoxElement = document.getElementById("main_content_box");
//Changes the main content display when menu chosen

function hideMainContent() {
    homeElement.style.display = "none";
    projectsElement.style.display = "none";
    contactElement.style.display = "none";
}

function displayHomePage() {
    if (pageNum != 1) {
        mainContentBoxElement.style.animationName = 'goingUp';
        mainContentBoxElement.style.animationDuration = '0.5s';
        mainContentBoxElement.addEventListener("animationend", () => {
            hideMainContent()
            homeElement.style.display = "block";
            
            mainContentBoxElement.style.animationName = 'goingDown';
        });
        pageNum = 1;
    }
}

function displayProjectsPage() {
    if (pageNum != 2) {
        mainContentBoxElement.style.animationName = 'goingUp';
        mainContentBoxElement.style.animationDuration = '0.5s';
        mainContentBoxElement.addEventListener("animationend", () => {
            hideMainContent()
            projectsElement.style.display = "block";
            
            mainContentBoxElement.style.animationName = 'goingDown';
        });
        pageNum = 2;
    }
    
}

function displayContactPage() {
    if (pageNum != 3) {
        mainContentBoxElement.style.animationName = 'goingUp';
        mainContentBoxElement.style.animationDuration = '0.5s';
        mainContentBoxElement.addEventListener("animationend", () => {
            hideMainContent()
            contactElement.style.display = "block";
            
            mainContentBoxElement.style.animationName = 'goingDown';
        });
        pageNum = 3;
    }
}