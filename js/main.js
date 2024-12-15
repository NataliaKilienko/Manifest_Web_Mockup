document.addEventListener('DOMContentLoaded', () => {
    const burgerCheckbox = document.querySelector('.burger');
    const menuLinks = document.querySelectorAll('.menu__link');

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (burgerCheckbox.checked) {
                burgerCheckbox.checked = false;
            }
        });
    });
});