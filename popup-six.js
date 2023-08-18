const POPUP_OPENED_CLASSNAME_6 = 'popup_open_six';
const BODY_FIXED_CLASSNAME_6 = 'body_fixed';

const bodyNode_6 = document.querySelector('body');
const popupNode_6 = document.querySelector('.js-popup_six');
const btnOpenNode_6 = document.querySelector('.js-button-price_six');
const popupContentNode_6 = document.querySelector('.js-popup__content_six')
const btnCloseNode_6 = document.querySelector('.js-popup__close-btn_six');

btnOpenNode_6.addEventListener('click', togglePopup);
btnCloseNode_6.addEventListener('click', togglePopup);

popupNode_6.addEventListener('click', (event) => {
    const isClickOutsideContent_6 = !event.composedPath().includes(popupContentNode_6)

    if (isClickOutsideContent_6) {
        togglePopup();
    }
})

function togglePopup() {
    popupNode_6.classList.toggle(POPUP_OPENED_CLASSNAME_6);
    bodyNode_6.classList.toggle(BODY_FIXED_CLASSNAME_6);
}
