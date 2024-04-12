document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll('.navbar-element');

    // Проверяем, есть ли сохраненное состояние в Local Storage
    const activeNavItem = localStorage.getItem('activeNavItem');
    if (activeNavItem) {
        document.querySelector(activeNavItem).classList.add('active');
    }

    navItems.forEach(item => {
        item.addEventListener('click', (event) => {
            // Удаление класса active у всех элементов навигации
            navItems.forEach(navItem => {
                navItem.classList.remove('active');
            });

            // Добавление класса active к текущему элементу навигации
            event.currentTarget.classList.add('active');

            // Сохранение текущего элемента навигации в Local Storage
            localStorage.setItem('activeNavItem', `#${event.currentTarget.id}`);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const mainLogo = document.querySelector('#g-logo');
    const mainPageNavItem = document.querySelector('#main-page');
    const navItems = document.querySelectorAll('.navbar-element');

    mainLogo.addEventListener('click', (event) => {
        // Удаление класса active у всех элементов навигации
        navItems.forEach(navItem => {
            navItem.classList.remove('active');
        });
        // Добавление класса active к элементу навигации "Main page"
        mainPageNavItem.classList.add('active');
        localStorage.setItem('activeNavItem', `#${mainPageNavItem.id}`);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const contact = document.querySelector('.contact-me-button');
    const page = document.querySelector('#contacts');
    const navItems = document.querySelectorAll('.navbar-element');

    contact.addEventListener('click', (event) => {
        // Удаление класса active у всех элементов навигации
        navItems.forEach(navItem => {
            navItem.classList.remove('active');
        });

        page.classList.add('active');
        localStorage.setItem('activeNavItem', `#${page.id}`);
    });
});
