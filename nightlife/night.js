const products = [
  {
    image:
      "https://b.zmtcdn.com/data/pictures/3/19326433/528f2a04269481ae814e04f0a4b8e6d3_featured_v2.jpg",
    title: "Levels Pub & Kitchen",
    rating: 4.4,
    cont: "North Indian, Chinese",
    price: 1000,
    location: "JP Nagar, Bangalore",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/0/18492910/76acb00469a40289d6e6a3578319991c_featured_v2.jpg",
    title: "Red Rhino",
    rating: 4.5,
    cont: "Pizza, Burger, Biryani",
    price: 1800,
    location: "Whitefield, Bangaluru",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/5/19300895/8f6f91d44d772c854aa675ddc4d627bb_featured_v2.jpg",
    title: "Big Pitcher",
    rating: 4.5,
    cont: "North Indian, Continental",
    price: 1600,
    location: "Sarjapur Road, Bangalore",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/2/53872/a802c255b02922c217fff01fa9c69e53_featured_v2.jpg",
    title: "Windmills Craftworks",
    rating: 4.8,
    cont: "Continental, Fastfood",
    price: 2600,
    location: "Windmills Craftworks, Bangalore",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/5/20250255/e6b6b24301c657337e9b0dd048e639fa_featured_v2.jpg",
    title: "Peepai",
    rating: 4.1,
    cont: "BBQ, Pizza",
    price: 1500,
    location: "Hebbal, Bangalore",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/2/51552/b35fdf1c1b0f13fc668efaea51c67921_featured_v2.jpg",
    title: "Skyye",
    rating: 4.3,
    cont: "Asian, Thai",
    price: 2500,
    location: "UB City, Bangalore",
  },
];

const box = document.querySelector(".products--box");

box.innerHTML = products.map(product => `
<div class="product-box">
<div class="product-details">
  <div class="prod-img-box">
    <img
      class="prod--img"
      src=${product.image}
      alt=${product.title}
    />
  </div>
  <div class="prod-desc-box">
    <div class="flex justify--end desc--head">
      <h4 class="prod--head">${product.title}</h4>
      <p class="prod--rating">
        ${product.rating} <ion-icon name="star-outline"></ion-icon>
      </p>
    </div>
    <div class="flex justify--end desc--cont">
      <p class="prod--ingridients">${product.cont}</p>
      <p class="prod--price">₹${product.price} for two</p>
    </div>
  </div>
  <div class="restaurant--location">
    <p>${product.location}</p>
  </div>
</div>
</div>
`).join('')


const home = document.querySelector('.nav-img');
home.addEventListener('click', function(){
    window.location.href = '/index.html';
})