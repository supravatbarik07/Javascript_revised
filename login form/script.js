
let submit=document.getElementById('btn');
let captcha_display=document.getElementById('captcha-code');
let refresh=document.getElementById('refresh')
let captcha_code='';
function generateCaptcha(){
    captcha_code='';
    for(let i=1;i<5;i++){
        let randomNo= Math.floor(Math.random()*10)
        captcha_code+=randomNo;
    }
}
generateCaptcha();
// console.log(captcha_code);
captcha_display.textContent=`${captcha_code}`

refresh.addEventListener('click',()=>{
    generateCaptcha();
    captcha_display.textContent=`${captcha_code}`
})



submit.addEventListener('click',()=>{
    let emailInput = document.getElementById("email").value;
    let passwordInput=document.getElementById('password').value;
    let captcha=document.getElementById('captcha').value;
    // let genderSelect=document.querySelector('input[name="gender"]:checked')?.value
    document.querySelector('.error').innerHTML='';
    if(captcha!==captcha_code){
        document.querySelector('.error').innerHTML=`captcha doesn't match'`
        return;
    }
    if(emailInput.length===0 || passwordInput.length===0){
        document.querySelector('.error').innerHTML='Please filed both the filed'
        return;
    }
    document.querySelector('.alert-box').style.display="block"
    document.querySelector('.alert-box').textContent='Login sucessfully.'

})