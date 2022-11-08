function formatText(text) { return text.trim().toLowerCase(); }

function copyTextToClipboard(text) { navigator.clipboard.writeText(text); }

function hideElement(element) { element.classList.add("invisible"); }

function showElement(element) { element.classList.remove("invisible"); }

function animateButtonState(button, newText) {
    const defaultText = button.textContent;
    button.textContent = newText;
    button.animate([
        { borderColor: "green", color: "green", pointerEvents: "none", offset: 0 },
        { color: "transparent", pointerEvents: "none", offset: 0.75 }
    ], 1800);
    setTimeout(() => { button.textContent = defaultText }, 1200);
}

export const auxiliary = {
    formatText,
    copyTextToClipboard,
    hideElement,
    showElement,
    animateButtonState
}