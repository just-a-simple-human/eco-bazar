class Category {
  constructor(name, icon, productsCount) {
    this.name = name;
    this.icon = icon;
    this.productsCount = productsCount;
  }
}

export const vegetablesCategory = new Category(
  "Vegetables",
  require("./images/vegetable.png"),
  165,
);
export const freshFruitCategory = new Category(
  "Fresh Fruit",
  require("./images/fruits.png"),
  137,
);
export const fishCategory = new Category(
  "Fish",
  require("./images/fish.png"),
  34,
);
export const meatCategory = new Category(
  "Meat",
  require("./images/meat.png"),
  165,
);
export const softDrinksCategory = new Category(
  "Soft Drinks",
  require("./images/soft-drink.png"),
  48,
);
export const snacksCategory = new Category(
  "Snacks",
  require("./images/snacks.png"),
  165,
);
