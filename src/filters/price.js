import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupPrice = (store) => {
  const priceInput = getElement(".price-filter");
  const priceValue = getElement(".price-value");

  // setup filter
  let maxPrice = store.map((product) => product.price); // containing all the prices of products
  maxPrice = Math.max(...maxPrice); // calculates the maximum price from the maxprice array
  maxPrice = Math.ceil(maxPrice / 100); //takes the maximum price and rounds it up to the nearest hundred
  priceInput.value = maxPrice;
  priceInput.max = maxPrice;
  priceInput.min = 0;
  priceValue.textContent = `value : $${maxPrice}`;

  priceInput.addEventListener("input", function () {
    const value = parseInt(priceInput.value);
    priceValue.textContent = `value : $${value}`;
    let newStore = store.filter((product) => product.price / 100 <= value);
    display(newStore, getElement(".products-container"), true);
    if (newStore.length < 1) {
      const products = getElement(".products-container");
      products.innerHTML = `<h3 class="filter-error"></h3>Sorry, no products match your search`;
    }
  });
};

export default setupPrice;
