const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const thumbnailsContainer = document.querySelector('.pictures');

const createThumbnails = (picturesData) => picturesData.map(({url, description, likes, comments}) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  return thumbnail;
});

const renderThumbnails = (picturesData) => {
  thumbnailsContainer.querySelectorAll('.picture').forEach((thumbnail) => thumbnail.remove());
  thumbnailsContainer.append(...createThumbnails(picturesData));
};

export {renderThumbnails};
