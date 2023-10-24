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

// Функция для перевода времени(строковое значение) в минуты
const parseMinutes = (time) => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};

const checkMeetingTime = (workStart, workEnd, meetingStart, meetingTime) => {
  workStart = parseMinutes(workStart);
  workEnd = parseMinutes(workEnd);
  const meetingDuration = parseMinutes(meetingStart) + meetingTime;
  return (meetingStart <= workStart) && (meetingDuration <= workEnd);
};

void (fitsLength, isPalindrome, parseMinutes, checkMeetingTime);
