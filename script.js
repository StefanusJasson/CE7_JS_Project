function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");

    var header = document.querySelector("header");
    header.classList.toggle("header-dark");

    var headerDropdown = document.querySelector("header-dropdown");
    header.classList.toggle("header-dark");
}

function toggleMenu() {
    var menu = document.getElementById("menu-button");
    var dropdown = document.getElementById("header-dropdown");
    // if (menu.style.display = "none") {
    //     menu.style.display = "block";
    // } else if (menu.style.display = "block") {
    //     menu.style.display = "none";
    // }
    menu.addEventListener('click', function(e) {
        console.log("pressed");
        if (dropdown.className == "header-dropdown") {
            dropdown.className = "header-dropdown-display";
        } else {
            dropdown.className = "header-dropdown";
        }
        e.preventDefault();
    });
}

toggleMenu();