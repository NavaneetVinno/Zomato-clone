const formData = document.querySelector('.signup-form');


function getData(){
    const fname = document.getElementById('name').value
    const email = document.getElementById('email').value
    const phone = document.getElementById('phone').value
    const password = document.getElementById('pass').value
    console.log(fname, email, phone, password);

    checkName(fname);
    checkEmail(email);
    checkPhone(phone);
    checkPass(password);
}

function checkName(name){
    if(name.includes(" ")){
        alert('your name contains spaces');
        return
    }
}

function checkEmail(email){
    if(!email.includes('@') || !email.includes('.')){
        alert("Invalid Email Id");
        return
    }
    let arr = email.split('@');
    if(arr.length > 2){
        alert('Invalid Email Id');
        return
    }
    // console.log(arr);
    let res = arr[1].split('.');
    if(res[1] > 3){
        alert('Invalid Email Id');
        return
    }
}

function checkPhone(phone){
    if(phone.length !== 10){
        alert('Invalid number')
        return
    }
}

function checkPass(password){
    if(password.length < 8){
        alert('Password is not valid');
        return
    }
}