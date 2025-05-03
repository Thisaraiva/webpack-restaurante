import "./styles.css";
import { renderHome } from "./home.js";
import { renderMenu } from "./menu.js";
import { renderContact } from "./contact.js";
import { clearContent } from "./domUtils.js";

// Mapear botões para funções
const tabs = {
    inicio: renderHome,
    menu: renderMenu,
    contact: renderContact,
};

// Configurar eventos
Object.keys(tabs).forEach((tabId) => {
    const button = document.getElementById(tabId);
    if (button) {
        button.addEventListener("click", () => {
            clearContent();            
            tabs[tabId]();                      
        });
    }
    
});



// Carregar página inicial
renderHome();