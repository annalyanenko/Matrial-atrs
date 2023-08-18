const POPUP_OPENED_CLASSNAME_5 = 'popup_open_five';
const BODY_FIXED_CLASSNAME_5= 'body_fixed';

const bodyNode_5 = document.querySelector('body');
const popupNode_5 = document.querySelector('.js-popup_five');
const btnOpenNode_5 = document.querySelector('.js-button-price_five');
const popupContentNode_5 = document.querySelector('.js-popup__content_five')
const btnCloseNode_5 = document.querySelector('.js-popup__close-btn_five');

btnOpenNode_5.addEventListener('click', togglePopup);
btnCloseNode_5.addEventListener('click', togglePopup);

popupNode_5.addEventListener('click', (event) => {
    const isClickOutsideContent_5 = !event.composedPath().includes(popupContentNode_5)

    if (isClickOutsideContent_5) {
        togglePopup();
    }
})

function togglePopup() {
    popupNode_5.classList.toggle(POPUP_OPENED_CLASSNAME_5);
    bodyNode_5.classList.toggle(BODY_FIXED_CLASSNAME_5);
}
