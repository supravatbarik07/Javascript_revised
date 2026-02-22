
let submit=document.getElementById('btn');


submit.addEventListener('click',()=>{
    let emailInput = document.getElementById("email").value;
    let passwordInput=document.getElementById('password').value;
    let genderSelect=document.querySelector('input[name="gender"]:checked')?.value
    document.querySelector('.error').innerHTML='';
    if(emailInput.length===0 || passwordInput.length===0){
        document.querySelector('.error').innerHTML='Please filed both the filed'
        return;
    }
    document.querySelector('.alert-box').style.display="block"
    document.querySelector('.alert-box').textContent='Login sucessfully.'
})