import { allProductsUrl } from "./utils.js";

const meiProducts = [
  {
    id: "rec43w3ipXvP28vog",
    fields: {
      category: "cream",
      colors: ["#f15025", "#222"],
      featured: true,
      price: 999,
      name: "high-back bench",
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
      name: "albany table mei",
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
      name: "accent chair",
      image: [
        {
          id: "attIieysyB9zQmQo9",
          width: 1000,
          height: 667,
          url: "https://course-api.com/images/store/product-3.jpeg",
          filename: "product-4.jpeg",
          size: 49641,
          type: "image/jpeg",
          thumbnails: {
            small: {
              url: "https://course-api.com/images/store/product-3.jpeg",
              width: 54,
              height: 36,
            },
            large: {
              url: "https://course-api.com/images/store/product-3.jpeg",
              width: 768,
              height: 512,
            },
            full: {
              url: "https://course-api.com/images/store/product-3.jpeg",
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
      name: "wooden table",
      image: [
        {
          id: "attXaEED3KJcY2cjY",
          width: 1280,
          height: 1891,
          url: "https://course-api.com/images/store/product-4.jpeg",
          filename: "pexels-dominika-roseclay-1139785.jpg",
          size: 203105,
          type: "image/jpeg",
          thumbnails: {
            small: {
              url: "https://course-api.com/images/store/product-4.jpeg",
              width: 24,
              height: 36,
            },
            large: {
              url: "https://course-api.com/images/store/product-4.jpeg",
              width: 512,
              height: 756,
            },
            full: {
              url: "https://course-api.com/images/store/product-4.jpeg",
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
      name: "dining table",
      image: [
        {
          id: "attxkKEEgmBnutpwI",
          width: 1280,
          height: 1858,
          url: "https://course-api.com/images/store/product-5.jpeg",
          filename: "product-8.jpg",
          size: 281908,
          type: "image/jpeg",
          thumbnails: {
            small: {
              url: "https://course-api.com/images/store/product-5.jpeg",
              width: 25,
              height: 36,
            },
            large: {
              url: "https://course-api.com/images/store/product-5.jpeg",
              width: 512,
              height: 743,
            },
            full: {
              url: "https://course-api.com/images/store/product-5.jpeg",
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
      name: "sofa set",
      image: [
        {
          id: "att5iyl4TJvd3oepN",
          width: 1000,
          height: 625,
          url: "https://course-api.com/images/store/product-6.jpeg",
          filename: "product-1.jpeg",
          size: 56151,
          type: "image/jpeg",
          thumbnails: {
            small: {
              url: "https://course-api.com/images/store/product-6.jpeg",
              width: 58,
              height: 36,
            },
            large: {
              url: "https://course-api.com/images/store/product-6.jpeg",
              width: 819,
              height: 512,
            },
            full: {
              url: "https://course-api.com/images/store/product-6.jpeg",
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
      name: "modern bookshelf",
      image: [
        {
          id: "attDj1C6GxJMsJ1he",
          width: 1280,
          height: 720,
          url: "https://course-api.com/images/store/product-7.jpeg",
          filename: "product-7.jpg",
          size: 162415,
          type: "image/jpeg",
          thumbnails: {
            small: {
              url: "https://course-api.com/images/store/product-7.jpeg",
              width: 64,
              height: 36,
            },
            large: {
              url: "https://course-api.com/images/store/product-7.jpeg",
              width: 910,
              height: 512,
            },
            full: {
              url: "https://course-api.com/images/store/product-7.jpeg",
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
      name: "emperor bed",
      image: [
        {
          id: "attiwrd7gSI1oGxRK",
          width: 1280,
          height: 720,
          url: "https://course-api.com/images/store/product-8.jpeg",
          filename: "product-6.jpg",
          size: 178908,
          type: "image/jpeg",
          thumbnails: {
            small: {
              url: "https://course-api.com/images/store/product-8.jpeg",
              width: 64,
              height: 36,
            },
            large: {
              url: "https://course-api.com/images/store/product-8.jpeg",
              width: 910,
              height: 512,
            },
            full: {
              url: "https://course-api.com/images/store/product-8.jpeg",
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
      name: "utopia sofa",
      image: [
        {
          id: "attqutUt355traBeS",
          width: 1280,
          height: 846,
          url: "https://course-api.com/images/store/product-9.jpeg",
          filename: "product-3.jpg",
          size: 196312,
          type: "image/jpeg",
          thumbnails: {
            small: {
              url: "https://course-api.com/images/store/product-9.jpeg",
              width: 54,
              height: 36,
            },
            large: {
              url: "https://course-api.com/images/store/product-9.jpeg",
              width: 775,
              height: 512,
            },
            full: {
              url: "https://course-api.com/images/store/product-9.jpeg",
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
      name: "entertainment center",
      image: [
        {
          id: "atttOzyYI8P1XfJu8",
          width: 1280,
          height: 924,
          url: "https://course-api.com/images/store/product-10.jpeg",
          filename: "product-2.jpg",
          size: 195175,
          type: "image/jpeg",
          thumbnails: {
            small: {
              url: "https://course-api.com/images/store/product-10.jpeg",
              width: 50,
              height: 36,
            },
            large: {
              url: "https://course-api.com/images/store/product-10.jpeg",
              width: 709,
              height: 512,
            },
            full: {
              url: "https://course-api.com/images/store/product-10.jpeg",
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
      name: "albany sectional",
      image: [
        {
          id: "attjWNxk7KKzcLPDx",
          width: 1000,
          height: 652,
          url: "https://images.pexels.com/photos/5797999/pexels-photo-5797999.jpeg?auto=compress&cs=tinysrgb&w=800",
          filename: "product-1.jpeg",
          size: 61946,
          type: "image/jpeg",
          thumbnails: {
            small: {
              url: "https://images.pexels.com/photos/5797999/pexels-photo-5797999.jpeg?auto=compress&cs=tinysrgb&w=800",
              width: 55,
              height: 36,
            },
            large: {
              url: "https://images.pexels.com/photos/5797999/pexels-photo-5797999.jpeg?auto=compress&cs=tinysrgb&w=800",
              width: 785,
              height: 512,
            },
            full: {
              url: "https://images.pexels.com/photos/5797999/pexels-photo-5797999.jpeg?auto=compress&cs=tinysrgb&w=800",
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
      name: "leather sofa",
      image: [
        {
          id: "attnZHyyOUTBzJ1ZD",
          width: 1280,
          height: 960,
          url: "https://course-api.com/images/store/product-12.jpeg",
          filename: "product-5.jpg",
          size: 189559,
          type: "image/jpeg",
          thumbnails: {
            small: {
              url: "https://course-api.com/images/store/product-12.jpeg",
              width: 48,
              height: 36,
            },
            large: {
              url: "https://course-api.com/images/store/product-12.jpeg",
              width: 683,
              height: 512,
            },
            full: {
              url: "https://course-api.com/images/store/product-12.jpeg",
              width: 3000,
              height: 3000,
            },
          },
        },
      ],
    },
  },
];

const fetchProducts = async () => {
  const response = await fetch(allProductsUrl).catch((err) => console.log(err));
  console.log(response);
  if (response) {
    // return response.json();
    return meiProducts;
  }
  return response;
};

export default fetchProducts;
