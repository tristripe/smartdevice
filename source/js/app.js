'use strict';

var callbackButton = document.querySelector('.button--callback');
var popupCallback = document.querySelector('.popup');
var popupCloseHandler = document.querySelector('.feedback__close');

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

var openCallback = function () {
  openPopup(popupCallback);
  popupCloseHandler.addEventListener('click', closePopup);
  document.addEventListener('keydown', pressEscHandler);
};

var closeCallback = function () {
  closePopup(popupCallback);
  popupCloseHandler.removeEventListener('click', closePopup);
  document.removeEventListener('keydown', pressEscHandler);
};

callbackButton.addEventListener('click', openCallback);
