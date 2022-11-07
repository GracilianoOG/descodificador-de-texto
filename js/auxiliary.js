function formatText(text) { return text.trim().toLowerCase(); }

function copyTextToClipboard(text) { navigator.clipboard.writeText(text); }

function hideElement(element) { element.classList.add("invisible"); }

function showElement(element) { element.classList.remove("invisible"); }

export const auxiliary = {
    formatText,
    copyTextToClipboard,
    hideElement,
    showElement
}