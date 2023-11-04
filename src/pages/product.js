// Global imports
import "../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";

// Specific imports
import { addToCart } from "../cart/setupCart.js";
import { getElement, formatPrice } from "../utils.js";

// Selections
const loading = getElement(".page-loading");
const centerDOM = getElement(".single-product-center");
const pageTitleDOM = getElement(".page-hero-title");
const imgDOM = getElement(".single-product-img");
const titleDOM = getElement(".single-product-title");
const companyDOM = getElement(".single-product-company");
const priceDOM = getElement(".single-product-price");
const colorsDOM = getElement(".single-product-colors");
const descDOM = getElement(".single-product-desc");
const cartBtn = getElement(".addToCartBtn");
const meiProduct = [
  {
    id: "rec43w3ipXvP28vog",
    fields: {
      category: "cream",
      colors: ["#f15025", "#222"],
      featured: true,
      price: 999,
      name: "facial hydrating cream",
      image: [
        {
          id: "attcvDDMikF6G2iNi",
          width: 1000,
          height: 639,
          url: "https://images.pexels.com/photos/3059398/pexels-photo-3059398.jpeg?auto=compress&cs=tinysrgb&w=800",
          filename: "product-1.jpeg",
          size: 62864,
          type: "image/jpeg",
          thumbnails: {
            small: {
              url: "https://images.pexels.com/photos/3059398/pexels-photo-3059398.jpeg?auto=compress&cs=tinysrgb&w=800",
              width: 56,
              height: 36,
            },
            large: {
              url: "https://images.pexels.com/photos/3059398/pexels-photo-3059398.jpeg?auto=compress&cs=tinysrgb&w=800",
              width: 801,
              height: 512,
            },
            full: {
              url: "https://images.pexels.com/photos/3059398/pexels-photo-3059398.jpeg?auto=compress&cs=tinysrgb&w=800",
              width: 3000,
              height: 3000,
            },
          },
        },
      ],
    },
  },
  {
    id: "rec4f2RIftFCb7aHh",
    fields: {
      category: "lotion",
      colors: ["#f15025", "#222"],
      price: 7999,
      name: "facial treatment",
      image: [
        {
          id: "attP2cUyxU35M1zbw",
          width: 1000,
          height: 1500,
          url: "https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=800",
          filename: "product-1.jpeg",
          size: 119274,
          type: "image/jpeg",
          thumbnails: {
            small: {
              url: "https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=800",
              width: 24,
              height: 36,
            },
            large: {
              url: "https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=800",
              width: 512,
              height: 768,
            },
            full: {
              url: "https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=800",
              width: 3000,
              height: 3000,
            },
          },
        },
      ],
    },
  },
  {
    id: "rec8kkCmSiMkbkiko",
    fields: {
      category: "UVcare",
      colors: ["#222", "#0000ff", "#f15025"],
      price: 2599,
      name: "botanical uvcare",
      image: [
        {
          id: "attIieysyB9zQmQo9",
          width: 1000,
          height: 667,
          url: "https://images.pexels.com/photos/16378498/pexels-photo-16378498.jpeg?auto=compress&cs=tinysrgb&w=1600",
          filename: "product-4.jpeg",
          size: 49641,
          type: "image/jpeg",
          thumbnails: {
            small: {
              url: "https://images.pexels.com/photos/16378498/pexels-photo-16378498.jpeg?auto=compress&cs=tinysrgb&w=1600",
              width: 54,
              height: 36,
            },
            large: {
              url: "https://images.pexels.com/photos/16378498/pexels-photo-16378498.jpeg?auto=compress&cs=tinysrgb&w=1600",
              width: 768,
              height: 512,
            },
            full: {
              url: "https://images.pexels.com/photos/16378498/pexels-photo-16378498.jpeg?auto=compress&cs=tinysrgb&w=1600",
              width: 3000,
              height: 3000,
            },
          },
        },
      ],
    },
  },
  {
    id: "recBohCqQsot4Q4II",
    fields: {
      category: "UVcare",
      colors: ["#ff0000", "#0000ff"],
      price: 4599,
      name: "botanical uvcare",
      image: [
        {
          id: "attXaEED3KJcY2cjY",
          width: 1280,
          height: 1891,
          url: "https://images.pexels.com/photos/1029896/pexels-photo-1029896.jpeg?auto=compress&cs=tinysrgb&w=1600",
          filename: "pexels-dominika-roseclay-1139785.jpg",
          size: 203105,
          type: "image/jpeg",
          thumbnails: {
            small: {
              url: "https://images.pexels.com/photos/1029896/pexels-photo-1029896.jpeg?auto=compress&cs=tinysrgb&w=1600",
              width: 24,
              height: 36,
            },
            large: {
              url: "https://images.pexels.com/photos/1029896/pexels-photo-1029896.jpeg?auto=compress&cs=tinysrgb&w=1600",
              width: 512,
              height: 756,
            },
            full: {
              url: "https://images.pexels.com/photos/1029896/pexels-photo-1029896.jpeg?auto=compress&cs=tinysrgb&w=1600",
              width: 3000,
              height: 3000,
            },
          },
        },
      ],
    },
  },
  {
    id: "recDG1JRZnbpRHpoy",
    fields: {
      category: "UVcare",
      colors: ["#ff0000", "#f15025"],
      price: 699,
      name: "aroma uvcare",
      image: [
        {
          id: "attxkKEEgmBnutpwI",
          width: 1280,
          height: 1858,
          url: "https://images.pexels.com/photos/4465121/pexels-photo-4465121.jpeg?auto=compress&cs=tinysrgb&w=1600",
          filename: "product-8.jpg",
          size: 281908,
          type: "image/jpeg",
          thumbnails: {
            small: {
              url: "https://images.pexels.com/photos/4465121/pexels-photo-4465121.jpeg?auto=compress&cs=tinysrgb&w=1600",
              width: 25,
              height: 36,
            },
            large: {
              url: "https://images.pexels.com/photos/4465121/pexels-photo-4465121.jpeg?auto=compress&cs=tinysrgb&w=1600",
              width: 512,
              height: 743,
            },
            full: {
              url: "https://images.pexels.com/photos/4465121/pexels-photo-4465121.jpeg?auto=compress&cs=tinysrgb&w=1600",
              width: 3000,
              height: 3000,
            },
          },
        },
      ],
    },
  },
  {
    id: "recNWGyP7kjFhSqw3",
    fields: {
      category: "lip&eyecare",
      colors: ["#0000ff"],
      price: 6999,
      name: " citrus lip treatment",
      image: [
        {
          id: "att5iyl4TJvd3oepN",
          width: 1000,
          height: 625,
          url: "https://images.pexels.com/photos/4041391/pexels-photo-4041391.jpeg?auto=compress&cs=tinysrgb&w=1600",
          filename: "product-1.jpeg",
          size: 56151,
          type: "image/jpeg",
          thumbnails: {
            small: {
              url: "https://images.pexels.com/photos/4041391/pexels-photo-4041391.jpeg?auto=compress&cs=tinysrgb&w=1600",
              width: 58,
              height: 36,
            },
            large: {
              url: "https://images.pexels.com/photos/4041391/pexels-photo-4041391.jpeg?auto=compress&cs=tinysrgb&w=1600",
              width: 819,
              height: 512,
            },
            full: {
              url: "https://images.pexels.com/photos/4041391/pexels-photo-4041391.jpeg?auto=compress&cs=tinysrgb&w=1600",
              width: 3000,
              height: 3000,
            },
          },
        },
      ],
    },
  },
  {
    id: "recZEougL5bbY4AEx",
    fields: {
      category: "lotion",
      colors: ["#00ff00", "#f15025", "#ff0000"],
      price: 899,
      name: "facial hydrator",
      image: [
        {
          id: "attDj1C6GxJMsJ1he",
          width: 1280,
          height: 720,
          url: "https://images.pexels.com/photos/6621472/pexels-photo-6621472.jpeg?auto=compress&cs=tinysrgb&w=1600",
          filename: "product-7.jpg",
          size: 162415,
          type: "image/jpeg",
          thumbnails: {
            small: {
              url: "https://images.pexels.com/photos/6621472/pexels-photo-6621472.jpeg?auto=compress&cs=tinysrgb&w=1600",
              width: 64,
              height: 36,
            },
            large: {
              url: "https://images.pexels.com/photos/6621472/pexels-photo-6621472.jpeg?auto=compress&cs=tinysrgb&w=1600",
              width: 910,
              height: 512,
            },
            full: {
              url: "https://images.pexels.com/photos/6621472/pexels-photo-6621472.jpeg?auto=compress&cs=tinysrgb&w=1600",
              width: 3000,
              height: 3000,
            },
          },
        },
      ],
    },
  },
  {
    id: "recjMK1jgTb2ld7sv",
    fields: {
      category: "lip&eyecare",
      colors: ["#f15025"],
      price: 2199,
      name: "woody lip treatment",
      image: [
        {
          id: "attiwrd7gSI1oGxRK",
          width: 1280,
          height: 720,
          url: "https://images.pexels.com/photos/3751227/pexels-photo-3751227.jpeg?auto=compress&cs=tinysrgb&w=1600",
          filename: "product-6.jpg",
          size: 178908,
          type: "image/jpeg",
          thumbnails: {
            small: {
              url: "https://images.pexels.com/photos/3751227/pexels-photo-3751227.jpeg?auto=compress&cs=tinysrgb&w=1600",
              width: 64,
              height: 36,
            },
            large: {
              url: "https://images.pexels.com/photos/3751227/pexels-photo-3751227.jpeg?auto=compress&cs=tinysrgb&w=1600",
              width: 910,
              height: 512,
            },
            full: {
              url: "https://images.pexels.com/photos/3751227/pexels-photo-3751227.jpeg?auto=compress&cs=tinysrgb&w=1600",
              width: 3000,
              height: 3000,
            },
          },
        },
      ],
    },
  },
  {
    id: "recmg2a1ctaEJNZhu",
    fields: {
      category: "lotion",
      colors: ["#00ff00", "#0000ff"],
      featured: true,
      price: 3995,
      name: "facial treatment",
      image: [
        {
          id: "attqutUt355traBeS",
          width: 1280,
          height: 846,
          url: "https://images.pexels.com/photos/3321416/pexels-photo-3321416.jpeg?auto=compress&cs=tinysrgb&w=1600",
          filename: "product-3.jpg",
          size: 196312,
          type: "image/jpeg",
          thumbnails: {
            small: {
              url: "https://images.pexels.com/photos/3321416/pexels-photo-3321416.jpeg?auto=compress&cs=tinysrgb&w=1600",
              width: 54,
              height: 36,
            },
            large: {
              url: "https://images.pexels.com/photos/3321416/pexels-photo-3321416.jpeg?auto=compress&cs=tinysrgb&w=1600",
              width: 775,
              height: 512,
            },
            full: {
              url: "https://images.pexels.com/photos/3321416/pexels-photo-3321416.jpeg?auto=compress&cs=tinysrgb&w=1600",
              width: 3000,
              height: 3000,
            },
          },
        },
      ],
    },
  },
  {
    id: "recvKMNR3YFw0bEt3",
    fields: {
      category: "lip&eyecare",
      colors: ["#ff0000", "#00ff00"],
      featured: true,
      price: 2998,
      name: "cedar treatment",
      image: [
        {
          id: "atttOzyYI8P1XfJu8",
          width: 1280,
          height: 924,
          url: "https://images.pexels.com/photos/6621357/pexels-photo-6621357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          filename: "product-2.jpg",
          size: 195175,
          type: "image/jpeg",
          thumbnails: {
            small: {
              url: "https://images.pexels.com/photos/6621357/pexels-photo-6621357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              width: 50,
              height: 36,
            },
            large: {
              url: "https://images.pexels.com/photos/6621357/pexels-photo-6621357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              width: 709,
              height: 512,
            },
            full: {
              url: "https://images.pexels.com/photos/6621357/pexels-photo-6621357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              width: 3000,
              height: 3000,
            },
          },
        },
      ],
    },
  },
  {
    id: "recxaXFy5IW539sgM",
    fields: {
      category: "cream",
      colors: ["#00ff00", "#ff0000"],
      price: 1099,
      name: "moisture cream",
      image: [
        {
          id: "attjWNxk7KKzcLPDx",
          width: 1000,
          height: 652,
          url: "https://images.pexels.com/photos/4046316/pexels-photo-4046316.jpeg?auto=compress&cs=tinysrgb&w=1600",
          filename: "product-1.jpeg",
          size: 61946,
          type: "image/jpeg",
          thumbnails: {
            small: {
              url: "https://images.pexels.com/photos/4046316/pexels-photo-4046316.jpeg?auto=compress&cs=tinysrgb&w=1600",
              width: 55,
              height: 36,
            },
            large: {
              url: "https://images.pexels.com/photos/4046316/pexels-photo-4046316.jpeg?auto=compress&cs=tinysrgb&w=1600",
              width: 785,
              height: 512,
            },
            full: {
              url: "https://images.pexels.com/photos/4046316/pexels-photo-4046316.jpeg?auto=compress&cs=tinysrgb&w=1600",
              width: 3000,
              height: 3000,
            },
          },
        },
      ],
    },
  },
  {
    id: "recyqtRglGNGtO4Q5",
    fields: {
      category: "lip&eyecare",
      colors: ["#222"],
      price: 999,
      name: "peel oil treatment",
      image: [
        {
          id: "attnZHyyOUTBzJ1ZD",
          width: 1280,
          height: 960,
          url: "https://images.pexels.com/photos/7319126/pexels-photo-7319126.jpeg?auto=compress&cs=tinysrgb&w=1600",
          filename: "product-5.jpg",
          size: 189559,
          type: "image/jpeg",
          thumbnails: {
            small: {
              url: "https://images.pexels.com/photos/7319126/pexels-photo-7319126.jpeg?auto=compress&cs=tinysrgb&w=1600",
              width: 48,
              height: 36,
            },
            large: {
              url: "https://images.pexels.com/photos/7319126/pexels-photo-7319126.jpeg?auto=compress&cs=tinysrgb&w=1600",
              width: 683,
              height: 512,
            },
            full: {
              url: "https://images.pexels.com/photos/7319126/pexels-photo-7319126.jpeg?auto=compress&cs=tinysrgb&w=1600",
              width: 3000,
              height: 3000,
            },
          },
        },
      ],
    },
  },
];
// Extract product ID from the URL

window.addEventListener("DOMContentLoaded", async function () {
  const urlParams = new URLSearchParams(window.location.search);
  const productID = urlParams.get("id");
  try {
    const product = meiProduct.find((product) => product.id === productID);
    if (product) {
      // Set values
      const { name, category, price, colors, description } = product.fields;
      const image = product.fields.image[0].url;

      document.title = `${name.toUpperCase()}`;
      pageTitleDOM.textContent = `${name}`;
      imgDOM.src = image;
      titleDOM.textContent = name;
      companyDOM.textContent = `${category}`;
      priceDOM.textContent = formatPrice(price);
      descDOM.textContent = description;

      // Display product colors
      // colors.forEach((color) => {
      //   const span = document.createElement("span");
      //   span.classList.add("product-color");
      //   span.style.backgroundColor = color;
      //   colorsDOM.appendChild(span);
      // });

      // Add to cart button click event
      cartBtn.addEventListener("click", function () {
        addToCart(productID);
      });
    } else {
      console.log("Product not found");
      centerDOM.innerHTML = `
      <div>
        <h3 class="error">Sorry, the product was not found.</h3>
        <a href="index.html" class="btn">Back to Home</a>
      </div>
    `;
    }
  } catch (error) {
    console.log(error);
  }
  // Hide the loading spinner
  loading.style.display = "none";
});

cartBtn.addEventListener("click", function () {
  addToCart(productID);
});

// window.addEventListener("DOMContentLoaded", async function () {
//   const urlID = window.location.search;
//   try {
//     const response = await this.fetch(`${singleProductUrl}${urlID}`);

//     if (response.status >= 200 && response.status <= 299) {
//       const product = await response.json();
//       // grab data
//       const { id, fields } = product;
//       productID = id;

//       const { name, company, price, colors, description } = fields;
//       const image = fields.image[0].thumbnails.large.url;
//       // set values
//       document.title = `${name.toUpperCase()}`;
//       pageTitleDOM.textContent = `Home / ${name}`;
//       imgDOM.src = image;
//       titleDOM.textContent = name;
//       companyDOM.textContent = `by ${company}`;
//       priceDOM.textContent = formatPrice(price);
//       descDOM.textContent = description;
//       colors.forEach((color) => {
//         const span = document.createElement("span");
//         span.classList.add("product-color");
//         span.style.backgroundColor = `${color}`;
//         colorsDOM.appendChild(span);
//       });
//     } else {
//       console.log(response.tatus, response.statusText);
//       centerDOM.innerHTML = `
//       <div>
//       <h3 class="error">sorry, something went wrong </h3>
//       <a href="index.html" class="btn">back home</a>
//       </div>
//       `;
//     }
//   } catch (error) {
//     console.log(error);
//   }

//   loading.style.display = "none";
// });
