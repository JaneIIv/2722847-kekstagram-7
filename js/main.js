import { createPhotosArray } from './generator.js';
import { renderThumbnails } from './pictures.js';

const photos = createPhotosArray();
renderThumbnails(photos);

export { photos };
