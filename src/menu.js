function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    createMenuItem(
      "Burger",
      "ground beef grilled, bun, Slices of raw onion, lettuce, bacon, mayonnaise"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Beef-Ribs",
      "freshly ground black pepper, garlic, brown onion"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Platter",
      "baked cheese, such as brie or camembert, topped with herbs and olive oil"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Vegitable",
      "Tomato sauce, Bacon, Pineapple, Olives, Basil"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Rump-Steak",
      "freshly ground black pepper, garlic, brown onion"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Hot-Dog",
      "beef trimmings, salt, and seasoning"
    )
  );

  return menu;
}

function createMenuItem(name, description) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const foodName = document.createElement("h2");
  foodName.textContent = name;

  const foodDescription = document.createElement("p");
  foodDescription.textContent = description;

  const foodImage = document.createElement("img");
  foodImage.src = `images/food/${name.toLowerCase()}.png`;
  foodImage.alt = `${name}`;

  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);

  return menuItem;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;
