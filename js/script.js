var modalOverlay = document.querySelector('.feedback-overlay');
var modalOpenButton =  document.querySelector('.btn-contact');
var modalCloseButton =  document.querySelector('.modal-close');


modalOpenButton.addEventListener('click', function (e) {
    e.preventDefault();
    modalOverlay.classList.add('feedback-overlay--show');
});

modalCloseButton.addEventListener('click', function (e) {
    e.preventDefault();
    modalOverlay.classList.remove('feedback-overlay--show');
});

window.addEventListener('keydown', function (e) {
    if (e.keyCode === 27 && modalOverlay.classList.contains('feedback-overlay--show')) {
        e.preventDefault();
        modalOverlay.classList.remove('feedback-overlay--show')
    }
});