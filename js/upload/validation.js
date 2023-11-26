import '../../vendor/pristine/pristine.min.js';

const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const split = (sequence) => sequence.split(' ').filter(Boolean);

pristine.addValidator(form.hashtags, (text) => {
  const hashtagPattern = /^#[a-zа-яё0-9]+$/i;
  return split(text).every((tag) => hashtagPattern.test(tag));
}, 'Невалидный хэш-тег', 1, true);

pristine.addValidator(form.hashtags, (text) => {
  const tags = split(text.toUpperCase());
  return tags.length === new Set(tags).size;
}, 'Хэш-тег повторяется', 1, true);

pristine.addValidator(form.hashtags, (text) => {
  const maxCount = 5;
  return split(text).length <= maxCount;
}, 'Превышено максимальное число хэш-тегов', 1, true);

pristine.addValidator(form.hashtags, (text) => {
  const maxHashtagLength = 20;
  return split(text).every((tag) => tag.length <= maxHashtagLength);
}, 'Превышена максимальная длина хэш-тега', 1, true);

pristine.addValidator(form.description, (text) => {
  const maxDescriptionLength = 140;
  return text.length <= maxDescriptionLength;
}, 'Превышена максимальная длина описания', 1, true);
