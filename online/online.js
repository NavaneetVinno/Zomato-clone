const products = [
    {
        image: 'https://b.zmtcdn.com/data/pictures/chains/1/61381/fb6da9eaaaeb427bda6f6a41f8a136f7_o2_featured_v2.jpg',
        title: 'Falahar & Kota Kachori',
        rating: 3.8,
        cont: 'North Indian, Rajasthani',
        price: 200,
        order: 1800,
    },
    {
        image: 'https://b.zmtcdn.com/data/pictures/3/18923303/25b96738276c3c19bf78759ecd0c94fe_o2_featured_v2.jpg',
        title: 'Shri Udupi Park',
        rating: 4.1,
        cont: 'South Indian',
        price: 150,
        order: 2050,
    },
    {
        image: 'https://b.zmtcdn.com/data/pictures/chains/0/18683480/c9759695c5e14e06927dc556c5f5674f_o2_featured_v2.jpg',
        title: 'Anand Sweets and Savouries',
        rating: 4.4,
        cont: 'Mithai, Street Food',
        price: 150,
        order: 3025,
    },
    {
        image: 'https://b.zmtcdn.com/data/pictures/chains/2/52072/d735aca1aaa4a7ce3034358eb8550d7b_o2_featured_v2.jpeg',
        title: "Adiga's",
        rating: 3.8,
        cont: 'South Indian, North Indian',
        price: 100,
        order: 1575,
    },
    {
        image: 'https://b.zmtcdn.com/data/pictures/2/18489132/0a9e5880fd1de8defde9a6917fa5280f_o2_featured_v2.jpg',
        title: 'Vishnu Garden',
        rating: 3.8,
        cont: 'South Indian, North Indian',
        price: 250,
        order: 6000,
    },
    {
        image: 'https://b.zmtcdn.com/data/pictures/chains/1/18720661/7709f03525d029923b4ca889bc41029d_o2_featured_v2.jpg',
        title: 'Hotel Navayuga',
        rating: 4.3,
        cont: 'Andra, Biryani',
        price: 300,
        order: 4125,
    },

];

let prodBox = document.querySelector('.products--box');
prodBox.innerHTML = products.map(product => `
<div class="product-box">
<div class="product-details">
    <div class="prod-img-box">
        <img class="prod--img" src=${product.image} alt="The Corner Of Chow">
    </div>
    <div class="prod-desc-box">
        <div class="flex justify--end desc--head">
            <h4 class="prod--head">${product.title}</h4>
            <p class="prod--rating">${product.rating} <ion-icon name="star-outline"></ion-icon></p>
        </div>
        <div class="flex justify--end desc--cont">
            <p class="prod--ingridients">${product.cont}</p>
            <p class="prod--price">₹${product.price} for one</p>
        </div>
    </div>
    <div class="prod-total-order flex border-top">
        <ion-icon class="total-icon" name="trending-up-outline"></ion-icon><p>${product.order}+ orders placed from here recently</p>
    </div>
</div>
</div>
`).join('')


const home = document.querySelector('.nav-img');
home.addEventListener('click', function(){
    window.location.href = '/index.html';
})

// const box = document.querySelector('.product-box');
// box.addEventListener('click', function(e){
//     console.log(object)
// })



