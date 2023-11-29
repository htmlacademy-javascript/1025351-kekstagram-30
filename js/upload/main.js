import { showPopup } from './popup';
import {getScale, resetScale} from './scale';
import { checkValidity, resetValidity } from './validation';
import { setEffect, getEffectValue, resetEffect } from './effects';

const form = document.querySelector('.img-upload__form');
const preview = document.querySelector('.img-upload__preview img');

form.addEventListener('change', (evt) => {
  switch (evt.target.name) {
    case 'filename':
      showPopup();
      break;
    case 'scale':
      preview.style.transform = `scale(${getScale() / 100})`;
      break;
    case 'effect-level':
      preview.style.filter = getEffectValue();
      break;
    case 'effect':
      setEffect(evt.target.value);
      break;
  }
});

form.addEventListener('submit', (evt) => {
  if (!checkValidity()) {
    evt.preventDefault();
  }
});

form.addEventListener('reset', () => {
  resetScale();
  resetEffect();
  resetValidity();
});

