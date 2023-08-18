const POPUP_OPENED_CLASSNAME_1 = 'popup_open_one';
const BODY_FIXED_CLASSNAME_1= 'body_fixed';

const bodyNode_1 = document.querySelector('body');
const popupNode_1 = document.querySelector('.js-popup_one');
const btnOpenNode_1 = document.querySelector('.js-button-price_one');
const popupContentNode_1 = document.querySelector('.js-popup__content_one')
const btnCloseNode_1 = document.querySelector('.js-popup__close-btn_one');

btnOpenNode_1.addEventListener('click', togglePopup);
btnCloseNode_1.addEventListener('click', togglePopup);

popupNode_1.addEventListener('click', (event) => {
    const isClickOutsideContent_1 = !event.composedPath().includes(popupContentNode_1)

    if (isClickOutsideContent_1) {
        togglePopup();
    }
})

function togglePopup() {
    popupNode_1.classList.toggle(POPUP_OPENED_CLASSNAME_1);
    bodyNode_1.classList.toggle(BODY_FIXED_CLASSNAME_1);
}
