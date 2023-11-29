import { renderThumbnails } from './thumbnails';
import { renderPopup } from './popup';
import { renderFilters } from './filters';
import { setRandomFilter, setPopularFilter } from './data';

const renderGallery = (picturesData, reduceFrequency) => {
  renderThumbnails(picturesData);
  renderFilters();

  document.addEventListener('filterSelect', reduceFrequency((evt) => {
    switch (evt.detail) {
      case 'filter-default':
        renderThumbnails(picturesData);
        break;
      case 'filter-discussed':
        renderThumbnails(setPopularFilter(picturesData));
        break;
      case 'filter-random':
        renderThumbnails(setRandomFilter(picturesData));
        break;
    }
  }));

  document.addEventListener('thumbnailSelect', (evt) => {
    renderPopup(evt.detail);
  });
};

export {renderGallery};
