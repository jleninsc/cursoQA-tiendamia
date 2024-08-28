// Selecciona el primer elemento con la clase "copyright"
const copyrightDiv = document.querySelector(".copyright");

// Crea el contenido del texto de copyright
const currentYear = new Date().getFullYear();
const copyrightText = `&reg; Lescware Technologies - &copy; ${currentYear} All rights reserved`;

// Asigna el texto al contenedor, asegurándote de usar innerHTML para interpretar entidades HTML
copyrightDiv.innerHTML = copyrightText;
