function applyDiscount(category, rate) {
  if (!(rate > 0 && rate <= 1)) {
    throw new RangeError("Invalid discount rate");
  }

  return {
    ...category,
    items: category.items.map(item => ({
      ...item,
      price: category.discountable ? item.price * (1 - rate) : item.price,
    })),
    subCategories: category.subCategories.map(sub => applyDiscount(sub, rate)),
  };
}



const tree = {
  name: "Electronics",
  discountable: true,
  items: [{ name: "Phone", price: 1000 }],
  subCategories: [
    {
      name: "Accessories",
      discountable: false,
      items: [{ name: "Case", price: 100 }],
      subCategories: [],
    },
  ],
};

console.log(applyDiscount(tree, 0.1));

module.exports = applyDiscount;
