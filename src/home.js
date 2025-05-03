import { images } from "./images.js";
import { appendToContent, createElement } from "./domUtils.js";

export const renderHome = () => {
    const mainContent = createElement("main", { className: "main-content" });

    const image = createElement("img", { className: "dragon-img" });
    image.src = images.mainImage;
    mainContent.appendChild(image);

    const mainDiv = createElement("div", { className: "main-div" });
    mainContent.appendChild(mainDiv);

    const mainTitle = createElement("h1", {
        className: "main-title",
        textContent: "Welcome to Dragon Ball Cuisine!",
    });
    mainDiv.appendChild(mainTitle);

    const mainDescription = createElement("p", {
        className: "main-description",
        textContent:
            "Inspired by the culinary battles of Dragon Ball, our restaurant brings the excitement of gourmet cooking to life. Experience dishes that ignite your taste buds and awaken your inner chef!",
    });
    mainDiv.appendChild(mainDescription);

    appendToContent(mainContent);
};