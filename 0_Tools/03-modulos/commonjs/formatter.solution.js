function toUpper(text) {
  return text.toUpperCase();
}

function prefix(text, pre) {
  return `${pre}${text}`;
}

module.exports = { toUpper, prefix };
