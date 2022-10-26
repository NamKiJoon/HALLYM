const headerBtn = document.querySelector(`.header_Btn`);
const menu = document.querySelector(`.header_menu`);
const icons = document.querySelector(`.header_icons`);

headerBtn.addEventListener(`click`, () => {
    menu.classList.toggle(`active`);
    icons.classList.toggle(`active`);
});
