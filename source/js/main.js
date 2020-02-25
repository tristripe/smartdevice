'use strict';

var callbackButton = document.querySelector('.button--callback');
var popupCallback = document.querySelector('.popup');
var popupCloseHandler = document.querySelector('.feedback__close');
var feedbackPhone = document.querySelector('input[name="phone"]');
var popupPhone = document.querySelector('input[name="popup-phone"]');
var feedbackPopup = document.querySelector('.feedback__wrapper.feedback__wrapper--popup');

var isEscEvent = function (evt, action) {
  if (evt.keyCode === 27) {
    action();
  }
};

var pressEscHandler = function (evt) {
  isEscEvent(evt, closeCallback);
};

var openPopup = function () {
  popupCallback.classList.remove('hidden');
};

var closePopup = function () {
  popupCallback.classList.add('hidden');
};

var outsideClickHandler = function (event) {
  if (!feedbackPopup.contains(event.target)) {
    closePopup();
  }
};

var openCallback = function () {
  openPopup(popupCallback);
  popupCallback.addEventListener('click', outsideClickHandler);
  popupCloseHandler.addEventListener('click', closePopup);
  document.addEventListener('keydown', pressEscHandler);
};

var closeCallback = function () {
  closePopup(popupCallback);
  popupCloseHandler.removeEventListener('click', closePopup);
  document.removeEventListener('keydown', pressEscHandler);
};
callbackButton.addEventListener('click', openCallback);

var mask = IMask(feedbackPhone, {
  mask: '+{7}(000)000-00-00'
});

var mask = IMask(popupPhone, {
  mask: '+{7}(000)000-00-00'
});
