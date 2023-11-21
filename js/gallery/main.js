import { renderThumbnails } from './thumbnails';
import { renderPopup } from './popup';

const renderGallery = (picturesData) => {
  renderThumbnails(picturesData);
  document.addEventListener('thumbnailSelect', (evt) => {
    renderPopup(evt.detail);
  });
};

export {renderGallery};
