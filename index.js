const online = document.querySelector('.online-box');
const dining = document.querySelector('.dining-box');
const night = document.querySelector('.night-box');

online.addEventListener('click', function(){
    window.location.href = "/online/online.html"
});

dining.addEventListener('click', function(){
    window.location.href = "/dining/dining.html"
});

night.addEventListener('click', function(){
    window.location.href = "/nightlife/night.html"
});

const email = document.getElementById('email');
const mobile = document.getElementById('mobile');

const one = document.querySelector('.list--one');
const list1 = document.querySelector('.items--1');
const two = document.querySelector('.list--two');
const list2 = document.querySelector('.items--2');
const three = document.querySelector('.list--three');
const list3 = document.querySelector('.items--3');
const four = document.querySelector('.list--four');
const list4 = document.querySelector('.items--4');
// let count = false;

one.addEventListener('click', function(){
    
    list1.classList.remove('hidden-items');
    list1.classList.add('show');
    list2.classList.add('hidden-items');
    list3.classList.add('hidden-items');
    list4.classList.add('hidden-items');
    
    
})


// if(!flag){
//     one.addEventListener('click', function() {
//         list1.classList.add('hidden-items');
//         flag = true;
//     })
// }

two.addEventListener('click',function(){
    list2.classList.remove('hidden-items');
    list2.classList.add('show');
    list1.classList.add('hidden-items');
    list3.classList.add('hidden-items');
    list4.classList.add('hidden-items');
})


three.addEventListener('click',function(){
    list3.classList.remove('hidden-items');
    list3.classList.add('show');
    list2.classList.add('hidden-items');
    list1.classList.add('hidden-items');
    list4.classList.add('hidden-items');
})


four.addEventListener('click',function(){
    list4.classList.remove('hidden-items');
    list4.classList.add('show');
    list2.classList.add('hidden-items');
    list3.classList.add('hidden-items');
    list1.classList.add('hidden-items');
})


// const signup = document.querySelector('.signup-btn');
// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');

// const openFunction = function(e){
    
//     console.log("click");
    
//     // overlay.classList.remove('hidden');
// }

// const closeFunction = function(){
//     modal.classList.add('hidden-section');
//     // overlay.classList.add('hidden');
// }

// signup.addEventListener('click', function(e){
//     e.preventDefault();
//     modal.classList.remove('hidden-section');
// });
// // overlay.addEventListener('click', closeFunction);