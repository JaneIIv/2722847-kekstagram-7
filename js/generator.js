import { MESSAGES, NAMES, DESCRIPTIONS } from './data.js';
import { getRandomInt, getRandomEl, createRandomID } from './utils.js';

const getCommentId = createRandomID(1, 10000);

function createComment() {
  const sentencesCount = getRandomInt(1, 2);
  let message = getRandomEl(MESSAGES);

  if (sentencesCount === 2) {
    let secondMessage = getRandomEl(MESSAGES);
    while (secondMessage === message) {
      secondMessage = getRandomEl(MESSAGES);
    }
    message += ` ${secondMessage}`;
  }

  return {
    id: getCommentId(),
    avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
    message: message,
    name: getRandomEl(NAMES),
  };
}

const getPhotoId = createRandomID(1, 25);

function createPhoto() {
  const commentsCount = getRandomInt(0, 30);
  const comments = [];

  for (let i = 0; i < commentsCount; i++) {
    comments.push(createComment());
  }

  const id = getPhotoId();

  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomEl(DESCRIPTIONS),
    likes: getRandomInt(15, 200),
    comments: comments,
  };
}

const createPhotosArray = () =>
  Array.from({ length: 25 }, createPhoto);

export { createComment, createPhoto, createPhotosArray };
