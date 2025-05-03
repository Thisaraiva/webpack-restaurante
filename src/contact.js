import { appendToContent, createElement } from "./domUtils.js";

export const renderContact = () => {

    const contactPage = createElement("div", {className: "contact-page"});
    
    const headerTitle = createElement("h1", {textContent: "Contact Us"});
    contactPage.appendChild(headerTitle);  

    const phoneNumber = createElement("p", {textContent: "📞 Phone: +1 (555) 123-4567"});
    contactPage.appendChild(phoneNumber);  

    const email = createElement("p", {textContent: "📧 Email: contact@foodwarscuisine.com"});
    contactPage.appendChild(email);
    
    const address = createElement("p", {textContent: "📍 Address: 123 Culinary Street, Flavor Town, USA"});
    contactPage.appendChild(address);
    
    const hours = createElement("p", {textContent: "⏰ Hours: Mon-Sun, 10:00 AM - 10:00 PM"});
    contactPage.appendChild(hours);
    
    appendToContent(contactPage);

};