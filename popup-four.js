const POPUP_OPENED_CLASSNAME_4 = 'popup_open_four';
const BODY_FIXED_CLASSNAME_4= 'body_fixed';

const bodyNode_4 = document.querySelector('body');
const popupNode_4 = document.querySelector('.js-popup_four');
const btnOpenNode_4 = document.querySelector('.js-button-price_four');
const popupContentNode_4 = document.querySelector('.js-popup__content_four')
const btnCloseNode_4 = document.querySelector('.js-popup__close-btn_four');

btnOpenNode_4.addEventListener('click', togglePopup);
btnCloseNode_4.addEventListener('click', togglePopup);

popupNode_4.addEventListener('click', (event) => {
    const isClickOutsideContent_4 = !event.composedPath().includes(popupContentNode_4)

    if (isClickOutsideContent_4) {
        togglePopup();
    }
})

function togglePopup() {
    popupNode_4.classList.toggle(POPUP_OPENED_CLASSNAME_4);
    bodyNode_4.classList.toggle(BODY_FIXED_CLASSNAME_4);
}
