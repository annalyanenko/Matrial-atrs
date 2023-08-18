const POPUP_OPENED_CLASSNAME_2 = 'popup_open_two';
const BODY_FIXED_CLASSNAME_2= 'body_fixed';

const bodyNode_2 = document.querySelector('body');
const popupNode_2 = document.querySelector('.js-popup_two');
const btnOpenNode_2 = document.querySelector('.js-button-price_two');
const popupContentNode_2 = document.querySelector('.js-popup__content_two')
const btnCloseNode_2 = document.querySelector('.js-popup__close-btn_two');

btnOpenNode_2.addEventListener('click', togglePopup);
btnCloseNode_2.addEventListener('click', togglePopup);

popupNode_2.addEventListener('click', (event) => {
    const isClickOutsideContent_2 = !event.composedPath().includes(popupContentNode_2)

    if (isClickOutsideContent_2) {
        togglePopup();
    }
})

function togglePopup() {
    popupNode_2.classList.toggle(POPUP_OPENED_CLASSNAME_2);
    bodyNode_2.classList.toggle(BODY_FIXED_CLASSNAME_2);
}
