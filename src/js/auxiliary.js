function formatText(text) {
  return text.trim().toLowerCase();
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

function animateButtonState(button, newText) {
  const defaultText = button.textContent;
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
    button.textContent = defaultText;
  }, 1200);
}

function outputMessage(input, containers) {
  if (input.value.length > 0) {
    hideElement(containers.message);
    showElement(containers.output);
    return;
  }
  showElement(containers.message);
  hideElement(containers.output);
  containers.error.textContent = "Nenhuma mensagem encontrada!";
}

export const auxiliary = {
  formatText,
  copyTextToClipboard,
  hideElement,
  showElement,
  animateButtonState,
  outputMessage,
};
