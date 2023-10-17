// Функция проверки длины строки
const fitsLength = (text, maxLength) => text.length <= maxLength;

// Функция для проверки, является ли строка палиндромом
const isPalindrome = (text) => {
  const normalizedString = text.replaceAll(' ', '').toLowerCase();
  let reversedString = '';
  for (let i = normalizedString.length - 1; i >= 0; i--) {
    reversedString += normalizedString[i];
  }
  return reversedString === normalizedString;
};

/* или более краткий вариант

const isPalindrome = (text) => {
  const normalizedString = text.replaceAll(' ', '').toLowerCase();
  const reversedString = text.split('').reverse().join('');
  return reversedString === normalizedString;
};

*/

void (fitsLength, isPalindrome);
