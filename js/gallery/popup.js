import { renderComments } from './comments';

const popup = document.querySelector('.big-picture');
const cancelButton = document.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    cancelButton.click();
  }
};

const showPopup = () => {
  popup.classList.remove('hidden');
  document.body.classList.add('.modal-open');
  document.addEventListener('keydown', onDocumentKeydown());
};

const hidePopup = () => {
  popup.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown());
};

const renderPopup = ({url, likes, description, comments}) => {
  popup.querySelector('.big-picture__img').src = url;
  popup.querySelector('.social__caption').textContent = description;
  popup.querySelector('.likes-count').textContent = likes;
  renderComments(comments);
  showPopup();
};

cancelButton.addEventListener('click', () => hidePopup());

export {renderPopup};
