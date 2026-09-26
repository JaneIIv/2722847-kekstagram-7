const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Артём',
  'Елена',
  'Иван',
  'Мария',
  'Дмитрий',
  'Ольга',
  'Кирилл',
  'Валерия',
  'Валерий',
  'Вероника',
  'Максим',
  'Евгения',
];

const DESCRIPTIONS = [
  'Морской закат на побережье.',
  'Горная вершина в облаках.',
  'Прогулка по осеннему лесу.',
  'Утренний туман над озером.',
  'Городские огни ночью.',
  'Полевые цветы на рассвете.',
  'Пушистый кот на подоконнике.',
  'Волны, разбивающиеся о скалы.',
  'Зимний лес в снегу.',
  'Уютная чашка кофе у окна.',
];

function getRandomInt(min, max) {
  const low = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const up = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  return Math.floor(Math.random() * (up - low + 1) + low);
}

function getRandomEl(array) {
  return array[getRandomInt(0, array.length - 1)];
}

function createRandomID(min, max) {
  const prevValues = [];

  return function () {
    let currentValue = getRandomInt(min, max);
    while (prevValues.includes(currentValue)) {
      currentValue = getRandomInt(min, max);
    }
    prevValues.push(currentValue);
    return currentValue;
  };
}

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

const photos = createPhotosArray();

// eslint-disable-next-line no-console
console.log(photos);
