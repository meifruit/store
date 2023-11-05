// global imports
import "../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";
import "../cart/checkout.js";
//  filter imports
import setupSearch from "../filters/search.js";
import setupCategories from "../filters/categories.js";
import setupPrice from "../filters/price.js";

// specific imports
import { setupStore, store } from "../store.js";
import display from "../displayProducts.js";
import { getElement } from "../utils.js";

// import fetch products
import fetchProducts from "../fetchProducts.js";
const init = async () => {
  const loading = getElement(".page-loading");

  if (store.length < 1) {
    const products = await fetchProducts();
    setupStore(products);
  }

  display(store, getElement(".products-container"));
  setupSearch(store);
  setupCategories(store);
  setupPrice(store);
  loading.style.display = "none";
};
init();
