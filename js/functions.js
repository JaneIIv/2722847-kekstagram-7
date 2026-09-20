const checkLength = (string, maxLength) => (string.length <= maxLength);

const checkPalindrom = (string) => {
  string = string.toLowerCase().replaceAll(' ', '');
  let result = '';
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }

  return (string === result);
};

const sumNumbers = (string) => {
  string = string.toString();
  let num = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(Number(string[i]))) {
      num += string[i];
    }
  }

  return parseInt(num, 10);
};
