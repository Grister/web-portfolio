document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll('.navbar-element');

    navItems.forEach(item => {
        item.addEventListener('click', (event) => {
            // Удаление класса active у всех элементов навигации
            navItems.forEach(navItem => {
                navItem.classList.remove('active');
            });

            // Добавление класса active к текущему элементу навигации
            event.currentTarget.classList.add('active');
        });
    });
});
