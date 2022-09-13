const products = [
  {
    image:
      "https://b.zmtcdn.com/data/pictures/7/19672427/fab0f327a0193957ee122f8c72c4d2f9_featured_v2.jpg?output-format=webp",
    title: "Ironhill Bangalore",
    rating: 4.4,
    cont: "Continental, North Indian",
    price: 1600,
    location: 'Marathahalli, Bangalore'
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/3/19122613/b449de49b3a577de34d51f797f39e3e0_featured_v2.jpg?output-format=webp",
    title: "Uru Brewpark",
    rating: 4.4,
    cont: "Italian, North Indian",
    price: 1500,
    location: 'JP Nagar, Bangalore'
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/9/18843699/805a549b3964b3944ebd00504a2bf606_featured_v2.jpg?output-format=webp",
    title: "The Bier Library",
    rating: 4.6,
    cont: "Continental, North Indian",
    price: 2000,
    location: 'Koramangala, Bangalore'
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/9/18627369/5b9284ed29595bbf65bb4d85de210448_featured_v2.jpg?output-format=webp",
    title: "Biergarten",
    rating: 4.7,
    cont: "Continental, European",
    price: 2000,
    location: 'Koramangala, Bangalore'
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/5/18537585/d971e1b240e2f40ca903aa1b51252fb3_featured_v2.jpg",
    title: "The Reservoire",
    rating: 4.5,
    cont: "Bar Food, North Indian",
    price: 1400,
    location: 'Indiranagar, Bangalore'
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/6/18853706/af9dd4cd1216093fb442bca38f4bf174_featured_v2.jpg",
    title: "Brahma Brews",
    rating: 4.6,
    cont: "Bar Food, Asian, Italian",
    price: 1900,
    location: 'JP Nagar, Bangalore'
  },
];

const container = document.querySelector('.products--box');

container.innerHTML = products.map(product => `
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
`).join('');


const home = document.querySelector('.nav-img');
home.addEventListener('click', function(){
    window.location.href = '/index.html';
});