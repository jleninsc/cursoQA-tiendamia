const menuContainer = document.getElementById("nav");

const ul = document.createElement("ul");

const menuItems = [
  { text: "Ofertas", href: "#" },
  { text: "Como comprar", href: "#" },
  { text: "Costos y Tarifas", href: "#" },
  { text: "Mis pedidos", href: "#" },
  { text: "Garantía", href: "#" },
];

menuItems.forEach(item => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = item.href;
  a.textContent = item.text;
  li.appendChild(a);
  ul.appendChild(li);
});

menuContainer.appendChild(ul);
