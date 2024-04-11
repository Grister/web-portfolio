 // function to set a given theme/color-scheme
 function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;

    const root = document.documentElement;
    const footerIcons = {
        'mail-footer': themeName,
        'telegram-footer': themeName,
        'github-footer': themeName,
        'linkedin-footer': themeName
    };
    if (themeName === 'light') {
        root.style.setProperty('--background-image-url', 'url("../images/main-page-LightV.png")');
        root.style.setProperty('--footer-color', '#ffffff');
        root.style.setProperty('--footer-logo-color', '#000000');
        root.style.setProperty('--card-shadow-set', '18px 18px 30px #d1d9e6a3');
    } else if (themeName === 'dark') {
        root.style.setProperty('--background-image-url', 'url("../images/main-page-DarkV.png")');
        root.style.setProperty('--footer-color', '#000000');
        root.style.setProperty('--footer-logo-color', '#ffffff');
        root.style.setProperty('--card-shadow-set', '5px 5px 30px #d1d9e6a3');
    }

    // Set icons for footer
    for (const [iconId, theme] of Object.entries(footerIcons)) {
        setFooterIcon(iconId, theme);
    }
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        setTheme('light');
    } else {
        setTheme('dark');
    }
}
// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'dark') {
        setTheme('dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('light');
      document.getElementById('slider').checked = true;
    }
})();


function setFooterIcon(iconId, theme) {
    const icon = document.getElementById(iconId);
    let imagePath;
    switch(theme) {
        case 'light':
            imagePath = staticURL + iconId + "_dark.svg";
            break;
        case 'dark':
            imagePath = staticURL + iconId + "_white.svg";
            break;
        default:
            return;
    }
    icon.src = imagePath;
}
