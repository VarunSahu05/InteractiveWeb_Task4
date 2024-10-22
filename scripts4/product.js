// Sample product data
const products = [
 // ELECTRONICS
  { name: 'Lenovo V14 Gen 5', category: 'electronics', price: 800, rating: 4.3, image: 'images/electronics/laptop1.avif' },
  { name: 'ASUS TUF', category: 'electronics', price: 750, rating: 4.4, image: 'images/electronics/laptop2.jpg' },
  { name: 'HP Victus', category: 'electronics', price: 700, rating: 4.5, image: 'images/electronics/laptop3.jpg' },
  { name: 'Apple iPhone 16', category: 'electronics', price: 900, rating: 4.5, image: 'images/electronics/phone2.webp' },
  { name: 'Realme 13 Pro+', category: 'electronics', price: 370, rating: 4.0, image: 'images/electronics/phone1.jpg' },
  { name: 'JBL', category: 'electronics', price: 112.5, rating: 4.2, image: 'images/electronics/HP1.webp' },
  { name: 'boAt', category: 'electronics', price: 20, rating: 4.1, image: 'images/electronics/HP2.webp' },
  { name: 'Redmi Watch 5', category: 'electronics', price: 31.5, rating: 3.9, image: 'images/electronics/watch1.webp' },
  { name: 'CrossBeats Nexus 2.01"', category: 'electronics', price: 45, rating: 4.5, image: 'images/electronics/watch2.jpg' },
  { name: 'AKAI', category: 'electronics', price: 50, rating: 3.7, image: 'images/electronics/speaker.jpg' },
  { name: 'Nikon', category: 'electronics', price: 1125, rating: 4.6, image: 'images/electronics/camera.jpg' },

  //CLOTHING
  { name: 'Trustous Mens Indian Ethnic Wear', category: 'clothing', price: 10, rating: 3.6, image: 'images/clothing/kurtas.jpg' },
  { name: 'adidas Mens Fitted T-Shirt', category: 'clothing', price: 12.5, rating: 4.5, image: 'images/clothing/t_shirt.jpg'},
  { name: 'CB-COLEBROOK Mens Regular Fit Solid Soft Touch Cotton Casual Shirt ', category: 'clothing', price: 6.5, rating: 3.8, image: 'images/clothing/shirt.jpg' },
  { name: 'ENDEAVOUR WEAR Mens Regular Fit Trackpants', category: 'clothing', price: 5, rating: 3.5, image: 'images/clothing/track.jpg'},
  { name: 'Trendz Womens Cotton Viscose Lycra Dhoti Patiyala Salwar Harem Bottoms Pants ', category: 'clothing', price: 7, rating: 3.9, image: 'images/clothing/salwar.jpg'},
  { name: 'SIRIL Womens Kanjeevaram Silk Blend Banarasi Jacquard Saree ', category: 'clothing', price: 7.5, rating: 3.2, image: 'images/clothing/saree.jpg'},
  { name: 'GoSriKi Womens Cotton Blend Embroidered Straight Kurta with Pant & Dupatta', category: 'clothing', price: 7.9, rating: 3.9, image: 'images/clothing/kurti.jpg'},
  { name: 'Uptownie Lite Women Stretchable Round Neck Sleeveless Regular Fit Crop Top', category: 'clothing', price: 4.12, rating: 3.9, image: 'images/clothing/top.jpg'},
  { name: 'PERFECTPIVOT Womens Jacket Style', category: 'clothing', price: 12.9, rating: 4, image: 'images/clothing/jack.jpg'},
  { name: 'Mens Solid Full Sleeves Regular Fit Casual Blazer', category: 'clothing', price: 17.5, rating: 3.5, image: 'images/clothing/blazzer.jpg'},
  { name: 'Ben Martin Mens Relaxed Fit Jeans', category: 'clothing', price: 6.5, rating: 3.5, image: 'images/clothing/jean.jpg'},

  //SPORTS
  { name: 'Yonex ZR 100 Light Badminton Combo (Set of 2 Yonex ZR 100 Light Badminton Racquet', category: 'sports', price: 25, rating: 3.7, image: 'images/sports/badminton.jpg' },
  { name: 'jaspo Cric-Addict Legender Cricket Set for Kids, Kit', category: 'sports', price: 31.25, rating: 4.3, image: 'images/sports/kit.jpg' },
  { name: 'HASHTAG FITNESS 10kg to 60kg gym equipment set for home', category: 'sports', price: 81.25, rating: 3.5, image: 'images/sports/gym1.webp' },
  { name: 'LEEWAY Home Gym Bench', category: 'sports', price: 231.25, rating: 3.8, image: 'images/sports/bench.webp' },
  { name: 'Cosco Dynamo Football', category: 'sports', price: 15, rating: 3.9, image: 'images/sports/fball.webp' },
  { name: 'TEC TAVAKKAL Magnetic Chessboard Game Set ', category: 'sports', price: 3.75, rating: 4.2, image: 'images/sports/chess.webp' },
  { name: 'Senston Basketball ', category: 'sports', price: 15.625, rating: 4.3, image: 'images/sports/bball.webp' },
  { name: 'Boldfit Yoga Mats for Women and Men', category: 'sports', price: 8.75, rating: 3.8, image: 'images/sports/yoga.webp' },
  { name: 'Nivia Crater Volleyball', category: 'sports', price: 5.375, rating: 3.7, image: 'images/sports/vball.webp' },
  { name: 'Ske Solid Popular Willow Cricket Bat ', category: 'sports', price: 6.25, rating: 3.3, image: 'images/sports/bat.jpg' },

  //HOME APPLN
  { name: 'Pigeon by Stovekraft Amaze Plus Electric Kettle', category: 'home', price: 7, rating: 3.9, image: 'images/appliance/kettle.webp'} , 
  { name: 'Bajaj DX-6 1000W Dry Iron ', category: 'home', price: 7.5, rating: 4.1, image: 'images/appliance/iron.webp'} ,
  { name: 'nutripro Copper Juicer Mixer Grinder - Smoothie Maker', category: 'home', price: 20.625, rating: 4.2, image: 'images/appliance/mixer.webp'} ,
  { name: 'Philips Viva Collection HD4928/01 2100-Watt Induction Cooktop', category: 'home', price: 35, rating: 4.2, image: 'images/appliance/induction.jpg'} ,
  { name: 'Crompton Arno Neo 15-L 5 Star Rated Storage Water Heater (Geyser) ', category: 'home', price: 71.25, rating: 4.0, image: 'images/appliance/water.webp'} ,
  { name: 'Philips PowerPro FC9352/01-Compact Bagless Vacuum Cleaner for Home', category: 'home', price: 100, rating: 4.3, image: 'images/appliance/vaccum.webp'} ,
  { name: 'Bajaj Majesty New RCX 3 350-Watt Multifunction Rice Cooker', category: 'home', price: 25, rating: 3.7, image: 'images/appliance/cooker.webp'} ,
  { name: 'Bajaj Immersion 1500 Watts Water Heater Rod', category: 'home', price: 6.875, rating: 4.1, image: 'images/appliance/heater.jpg'} ,
  { name: 'AGARO Marvel Oven Toaster', category: 'home', price: 53.75, rating: 4.0, image: 'images/appliance/oven.jpg'} ,
  { name: 'KENT 16051 Hand Blender 300 W', category: 'home', price: 14.25, rating: 4.1, image: 'images/appliance/blender.webp'} ,

  //TOYS
  { name: 'GRAPHENE Animal Figure Toy Set ', category: 'toys', price: 2, rating: 3.7, image: 'images/toys/animal.webp' },
  { name: 'Galaxy Hi-Tech Mini Metal Die Cast Car Set ', category: 'toys', price: 5, rating: 4.0, image: 'images/toys/cars.webp' },
  { name: 'GRAPHENE 32 Hole Electric Gatling Bubble machine Gun', category: 'toys', price: 2.75, rating: 4.3, image: 'images/toys/bubble.webp' },
  { name: 'WireScorts Plastic Geometry Toys', category: 'toys', price: 2, rating: 4.8, image: 'images/toys/geometry.jpg' },
  { name: 'Relizaa Doll House', category: 'toys', price: 75, rating: 4.4, image: 'images/toys/barbie.webp' },
  { name: 'Toy Imagine Dancing Cactus Toy for Babies Talking', category: 'toys', price: 3.75, rating: 3.8, image: 'images/toys/cact.jpg' },
  { name: 'Popsugar Off Roader Rechargeable Remote Control Monster Truck', category: 'toys', price: 13.75, rating: 4.3, image: 'images/toys/car.webp' },
  { name: 'Butterfly EduFields 150+ Girls Science Kit', category: 'toys', price: 10, rating: 4.3, image: 'images/toys/sci.jpg' },
  { name: 'Jam & Honey Teddy Bear', category: 'toys', price: 3.75, rating: 4.3, image: 'images/toys/bear.webp' },
  { name: 'Coogam Wooden Tetris Puzzle Brain Teasers Toy Tangram Jigsaw Intelligence Puzzle Colorful 3D Russian Blocks', category: 'toys', price: 3, rating: 4.5, image: 'images/toys/puzzle.webp' },

];

const productList = document.getElementById('product-list');
const categoryFilter = document.getElementById('category-filter');
const priceFilter = document.getElementById('price-filter');
const sortBy = document.getElementById('sort-by');
const cartItemsContainer = document.getElementById('cart-items');
const totalAmountElement = document.getElementById('total-amount');

let cart = [];
let totalAmount = 0;

// Display products dynamically based on filters and sorting
function displayProducts(filteredProducts) {
  productList.innerHTML = '';
  filteredProducts.forEach(product => {
      const productItem = `
          <div class="product-item">
              <img src="${product.image}" alt="${product.name}" />
              <h3>${product.name}</h3>
              <p>Price: $${product.price}</p>
              <p>Rating: ${product.rating}</p>
              <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
          </div>`;
      productList.innerHTML += productItem;
  });
}

// Filter and sort products
function filterAndSortProducts() {
  let filteredProducts = [...products];

  // Filter by category
  const category = categoryFilter.value;
  if (category) {
      filteredProducts = filteredProducts.filter(p => p.category === category);
  }

  // Filter by price
  const price = priceFilter.value;
  if (price === 'low') {
      filteredProducts = filteredProducts.filter(p => p.price < 50);
  } else if (price === 'mid') {
      filteredProducts = filteredProducts.filter(p => p.price >= 50 && p.price <= 500);
  } else if (price === 'high') {
      filteredProducts = filteredProducts.filter(p => p.price > 500);
  }

  // Sort products
  const sort = sortBy.value;
  if (sort === 'price-asc') {
      filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
      filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sort === 'rating-asc') {
      filteredProducts.sort((a, b) => a.rating - b.rating);
  } else if (sort === 'rating-desc') {
      filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(filteredProducts);
}

// Add item to cart
function addToCart(productName, productPrice) {
  cart.push({ name: productName, price: productPrice });
  totalAmount += productPrice;
  updateCart();
}

// Remove item from cart
function removeFromCart(index) {
  totalAmount -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
}

// Update cart display
function updateCart() {
  cartItemsContainer.innerHTML = '';
  cart.forEach((item, index) => {
      const cartItem = `
          <div class="cart-item">
              <span>${item.name} - $${item.price}</span>
              <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
          </div>`;
      cartItemsContainer.innerHTML += cartItem;
  });
  totalAmountElement.innerHTML = `<strong>Total Amount: $${totalAmount.toFixed(2)}</strong>`;
}

// Initial product display
filterAndSortProducts();

// Event listeners for filters and sorting
categoryFilter.addEventListener('change', filterAndSortProducts);
priceFilter.addEventListener('change', filterAndSortProducts);
sortBy.addEventListener('change', filterAndSortProducts);
