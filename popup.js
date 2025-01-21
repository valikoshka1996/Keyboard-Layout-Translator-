// Мапи транслітерації між розкладками
const layouts = {
  uk: "`йцукенгшщзхїфівапролджєячсмитьбю.",
  en: "`qwertyuiop[]asdfghjkl;'zxcvbnm,./",
  ru: "`йцукенгшщзхъфывапролджэячсмитьбю."
};

function translateText(text, from, to) {
  const fromLayout = layouts[from];
  const toLayout = layouts[to];

  if (!fromLayout || !toLayout || from === to) {
    return text; // Якщо обрано однакові розкладки або немає відповідної
  }

  return text
    .split('')
    .map(char => {
      const index = fromLayout.indexOf(char.toLowerCase());
      if (index === -1) return char; // Якщо символ не знайдено
      const translatedChar = toLayout[index];
      return char === char.toUpperCase() ? translatedChar.toUpperCase() : translatedChar;
    })
    .join('');
}

document.getElementById('translateButton').addEventListener('click', () => {
  const inputText = document.getElementById('inputText').value;
  const fromLayout = document.getElementById('fromLayout').value;
  const toLayout = document.getElementById('toLayout').value;

  const outputText = translateText(inputText, fromLayout, toLayout);
  document.getElementById('outputText').value = outputText;
});
