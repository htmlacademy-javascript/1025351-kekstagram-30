const [scaleDecreaseButton, display, scaleIncreaseButton] = document.querySelectorAll('.scale__control');
const settings = {min: 25, max: 100, step: 25, defaultValue: 100};

const setScale = (value) => {
  value = Math.max(value, settings.min);
  value = Math.min(value, settings.max);
  display.value = `${value}%`;
  display.dispatchEvent(new Event('change', {bubbles: true}));
};
const getScale = () => Number.parseFloat(display.value);
const resetScale = () => setScale(settings.defaultValue);
const scaleIncrease = () => setScale(getScale() + settings.step);
const scaleDecrease = () => setScale(getScale() - settings.step);

scaleDecreaseButton.addEventListener('click', () => scaleDecrease());
scaleIncreaseButton.addEventListener('click', () => scaleIncrease());

export {getScale, resetScale};
