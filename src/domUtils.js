// src/domUtils.js
export const clearContent = () => {
    const content = document.getElementById("content");
    if (content) {
        content.replaceChildren();
    }
};

export const appendToContent = (element) => {
    const content = document.getElementById("content");
    if (content && element) {
        content.appendChild(element);
    }
};

export const createElement = (tag, options = {}) => {
    const element = document.createElement(tag);
    if (options.className) element.classList.add(options.className);
    if (options.textContent) element.textContent = options.textContent;
    return element;
};