const picturesBox = document.querySelector('.pictures');
const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderThumbnails = (photos) => {
  const fragment = document.createDocumentFragment();

  photos.forEach(({ url, description, likes, comments }) => {
    const thumbnail = thumbnailTemplate.cloneNode(true);
    const img = thumbnail.querySelector('.picture__img');
    img.src = url;
    img.alt = description;
    thumbnail.querySelector('.picture__likes').textContent = likes;
    thumbnail.querySelector('.picture__comments').textContent = comments.length;
    fragment.appendChild(thumbnail);
  });

  picturesBox.appendChild(fragment);
};

export { renderThumbnails };

