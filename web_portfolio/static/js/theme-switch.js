 // function to set a given theme/color-scheme
 function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;

    const footerIcons = {
        'mail-footer': themeName,
        'telegram-footer': themeName,
        'github-footer': themeName,
        'linkedin-footer': themeName
    };

    // Set icons for footer
    for (const [iconId, theme] of Object.entries(footerIcons)) {
        setFooterIcon(iconId, theme);
    }
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
      document.getElementById('slider').checked = true;
    }
})();


function setFooterIcon(iconId, theme) {
    const icon = document.getElementById(iconId);
    let imagePath;
    switch(theme) {
        case 'theme-light':
            imagePath = "D:/dev%20staff/python/P-ject%20python/Django-projects/web-cv/web_portfolio/static/icons/" + iconId + "_dark.svg";
            break;
        case 'theme-dark':
            imagePath = "D:/dev%20staff/python/P-ject%20python/Django-projects/web-cv/web_portfolio/static/icons/" + iconId + "_white.svg";
            break;
        default:
            return;
    }
    icon.src = imagePath;
}
