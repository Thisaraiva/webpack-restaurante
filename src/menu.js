import { images } from "./images.js";
import { appendToContent, createElement } from "./domUtils.js";

export const renderMenu = () => {
    const menuContent = createElement("div", { className: "menu-content" });

    const menuTitle = createElement("h1", {
        className: "menu-title",
        textContent: "Delicious Food Dragon Ball",
    });
    menuContent.appendChild(menuTitle);

    const menuDescription = createElement("p", {
        className: "menu-description",
        textContent:
            "Explore our exclusive menu inspired by the legendary dishes of Dragon Ball. Each dish is crafted to perfection, delivering an unforgettable culinary experience.",
    });
    menuContent.appendChild(menuDescription);

    const menuList = createElement("ul", { className: "menu-list" });
    menuContent.appendChild(menuList);

    const dishes = [
        { 
            name: 'Delicious Beef', 
            description: 'A savory and tender dish made with potatoes and bacon, topped with a rich sauce.', 
            image: images.beef
        },
        { 
            name: 'Wonderful Chicken', 
            description: 'A simple yet elegant rice dish that transforms with every bite.', 
            image: images.chicken
        },
        { 
            name: 'Fabulous Chicken', 
            description: 'Juicy steak served over rice, topped with caramelized onions for a burst of flavor.', 
            image: images.chicken1
        },
        { 
            name: 'Soufflé Pork', 
            description: 'A fluffy and light omelette that melts in your mouth.', 
            image: images.pork
        },
        { 
            name: 'Strog', 
            description: 'A spicy and flavorful tofu dish that packs a punch.', 
            image: images.strog
        },
        { 
            name: 'Delicious Beef', 
            description: 'A savory and tender dish made with potatoes and bacon, topped with a rich sauce.', 
            image: images.beef
        }
    ];

    dishes.forEach((dish) => {
        const menuItem = createElement("li", { className: "menu-item" });

        const dishImage = createElement("img", { className: "menu-item-image" });
        dishImage.src = dish.image;
        dishImage.alt = dish.name;
        menuItem.appendChild(dishImage);

        const dishName = createElement("h3", { textContent: dish.name });
        menuItem.appendChild(dishName);

        const dishDescription = createElement("p", { textContent: dish.description });
        menuItem.appendChild(dishDescription);

        menuList.appendChild(menuItem);
    });

    appendToContent(menuContent);
};