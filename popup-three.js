const POPUP_OPENED_CLASSNAME_3 = 'popup_open_three';
const BODY_FIXED_CLASSNAME_3= 'body_fixed';

const bodyNode_3 = document.querySelector('body');
const popupNode_3 = document.querySelector('.js-popup_three');
const btnOpenNode_3 = document.querySelector('.js-button-price_three');
const popupContentNode_3 = document.querySelector('.js-popup__content_three')
const btnCloseNode_3 = document.querySelector('.js-popup__close-btn_three');

btnOpenNode_3.addEventListener('click', togglePopup);
btnCloseNode_3.addEventListener('click', togglePopup);

popupNode_3.addEventListener('click', (event) => {
    const isClickOutsideContent_3 = !event.composedPath().includes(popupContentNode_3)

    if (isClickOutsideContent_3) {
        togglePopup();
    }
})

function togglePopup() {
    popupNode_3.classList.toggle(POPUP_OPENED_CLASSNAME_3);
    bodyNode_3.classList.toggle(BODY_FIXED_CLASSNAME_3);
}
