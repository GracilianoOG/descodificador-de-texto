function formatText(text) {
  return text
    .replace(/[^a-zA-Z\s]/g, "")
    .toLowerCase()
    .trim();
}

function copyTextToClipboard(text) {
  navigator.clipboard.writeText(text);
}

function hideElement(element) {
  element.classList.add("invisible");
}

function showElement(element) {
  element.classList.remove("invisible");
}

function animateButtonState(button, oldText, newText) {
  button.textContent = newText;
  button.animate(
    [
      {
        borderColor: "var(--copy-btn-copied-col)",
        color: "var(--copy-btn-copied-col)",
        pointerEvents: "none",
        offset: 0,
      },
      { color: "transparent", pointerEvents: "none", offset: 0.75 },
    ],
    1800
  );
  setTimeout(() => {
    button.textContent = oldText;
  }, 1200);
}

export {
  formatText,
  copyTextToClipboard,
  hideElement,
  showElement,
  animateButtonState,
};
