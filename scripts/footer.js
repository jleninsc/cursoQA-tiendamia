const columnsContainer = document.getElementById("columns-container");

const columnsData = [
  {
    items: [
      { text: "Ofertas", href: "#" },
      { text: "Laptops", href: "#" },
      { text: "Audio", href: "#" },
      { text: "Auriculares", href: "#" },
    ]
  },
  {
    items: [
      { text: "Como comprar", href: "#" },
      { text: "Formas de pago", href: "#" },
      { text: "Envíos", href: "#" },
      { text: "Devoluciones", href: "#" },
    ]
  },
  {
    items: [
      { text: "Costos y tarifas", href: "#" },
      { text: "Impuestos", href: "#" },
      { text: "Facturación", href: "#" },
    ]
  },
  {
    items: [
      { text: "Mis pedidos", href: "#" },
      { text: "Pedir de nuevo", href: "#" },
      { text: "Lista de deseos", href: "#" },
    ]
  },
  {
    items: [
      { text: "Garantía de entrega", href: "#" },
    ]
  }
];

columnsData.forEach(columnData => {
  const colDiv = document.createElement("div");
  colDiv.className = "col";

  const ul = document.createElement("ul");

  columnData.items.forEach(item => {
    const li = document.createElement("li");
    if (item.text === "Ofertas" || item.text === "Como comprar" || item.text === "Costos y tarifas" || item.text === "Mis pedidos" || item.text === "Garantía de entrega") {
      li.className = "col-main-item";
    }
    const a = document.createElement("a");
    a.href = item.href;
    a.textContent = item.text;
    li.appendChild(a);
    ul.appendChild(li);
  });

  colDiv.appendChild(ul);

  columnsContainer.appendChild(colDiv);
});
