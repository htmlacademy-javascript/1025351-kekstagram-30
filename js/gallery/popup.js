import { renderComments } from './comments';

const popup = document.querySelector('.big-picture');

const renderPopup = ({url, likes, description, comments}) => {
  popup.querySelector('.big-picture__img').src = url;
  popup.querySelector('.social__caption').textContent = description;
  popup.querySelector('.likes-count').textContent = likes;
  renderComments(comments);
  popup.classList.remove('hidden');
  document.body.classList.add('.modal-open');
};

export {renderPopup};
