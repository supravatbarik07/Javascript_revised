
// let submit=document.getElementById('btn');
let login_captcha_display=document.getElementById('login-captcha-code');
let regi_captcha_display=document.getElementById('reg-captcha-code');
let refresh=document.querySelectorAll('.refresh')
let homePage=document.getElementById('home-section')
let loginPage=document.getElementById('login-section')
let regiForm=document.getElementById('registration-form')
let welcomeMsg=document.querySelector('.welcome-user')
let userNameLogo=document.getElementById('user-logo');

let isLoggedIn = false;
let login_captcha_code='';
let regi_captcha_code='';
let users=[]

function userData(){
    users.forEach(getUserDetails =>{
    console.log(`The user is :-${getUserDetails.first_name}`);
})
}

//captcha code logic

function generateCaptcha(){
    let captcha_code='';
    for(let i=1;i<5;i++){
        let randomNo= Math.floor(Math.random()*10)
        captcha_code+=randomNo;
    }
    return captcha_code;
}
function updateLoginCaptcha(){
       login_captcha_code=generateCaptcha();
       login_captcha_display.textContent=login_captcha_code;
}
function updateRegistrationCaptcha(){
    regi_captcha_code=generateCaptcha();
    regi_captcha_display.textContent=regi_captcha_code;
}
generateCaptcha();
updateLoginCaptcha();
updateRegistrationCaptcha();
 //console.log(captcha_code);
// captcha_display.textContent=`${captcha_code}`// for sigle captcha box

//You can use the both for loop 
// refresh.forEach(btn=>{
// btn.addEventListener('click',()=>{
//     generateCaptcha();
//     updateCaptchaDisplay();
// })

for(let btn of refresh){
    btn.addEventListener('click',()=>{
    generateCaptcha();
    const target_id=btn.parentElement.querySelector('.captcha-code').id;
    if(target_id === 'login-captcha-code'){
        updateLoginCaptcha();
    }else if(target_id === 'reg-captcha-code'){
        updateRegistrationCaptcha();
    }
})
}

function clear_fields(){
    let clear_inputs=document.querySelectorAll(`input[type="text"], input[type="email"],input[type="password"],
        input[type="radio"],input[type='number']`);
    
    clear_inputs.forEach(onebyone =>{
        if(onebyone.type === 'radio'){
            onebyone.checked=false;
        }
        else{
            onebyone.value='';
        }
        
    });
}

document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault()
    let emailInput = document.getElementById("email").value.trim();
    let passwordInput=document.getElementById('password').value.trim();
    let captcha=document.getElementById('login-captcha-input').value.trim();
    // let genderSelect=document.querySelector('input[name="gender"]:checked')?.value
    document.querySelector('.error').innerHTML='';
    if(emailInput.length === 0 || passwordInput.length === 0){
        document.querySelector('.error-alert-box').style.display="block"
        document.querySelector('.error-alert-box').textContent=`Please filed both the filed`
        setTimeout(()=>{
        document.querySelector('.error-alert-box').style.display="none"
    },3000);
        return;
    }
     if(captcha.length === 0){
        document.querySelector('.error-alert-box').style.display="block"
        document.querySelector('.error-alert-box').textContent=`captcha can't be empty`
       setTimeout(()=>{
        document.querySelector('.error-alert-box').style.display="none"
    },3000);
        return;
    }
    if(captcha !== login_captcha_code){
        document.querySelector('.error-alert-box').style.display="block"
        document.querySelector('.error-alert-box').textContent=`captcha doesn't match`
        setTimeout(()=>{
        document.querySelector('.error-alert-box').style.display="none"
    },3000);
        return;
    }

    let userFound=null;

    for (let user of users){
        if(user.email === emailInput){
            userFound=user;
            break;
        }
    }
    if(!userFound){
         document.querySelector('.error-alert-box').style.display="block"
        document.querySelector('.error-alert-box').textContent=`User Can't find`
        setTimeout(()=>{
        document.querySelector('.error-alert-box').style.display="none"
    },3000);
        return;
    }

    if(userFound.password !== passwordInput){
    document.querySelector('.error-alert-box').style.display="block"
        document.querySelector('.error-alert-box').textContent=`Password incorrect`
        setTimeout(()=>{
        document.querySelector('.error-alert-box').style.display="none"
    },3000);
        return;
}
    document.querySelector('.success-alert-box').style.display="block"
    document.querySelector('.success-alert-box').textContent='Login sucessfully...'
    clear_fields();
    setTimeout(()=>{
        generateCaptcha();
        updateLoginCaptcha();
    },500)
    setTimeout(()=>{
        document.querySelector('.error-alert-box').style.display="none"
    },3000);
    setTimeout(()=>{
        document.querySelector('.success-alert-box').style.display="none"
    },3000);
    isLoggedIn=true;
    updateNavBar();
    homePageDisplay();
    welcomeMessage();
})

//Display HomePage/loginPage logic

function homePageDisplay(){
    homePage.style.display='block';
    loginPage.style.display='none';
    document.querySelector(`.register-section`).style.display='none';
    if(!isLoggedIn){
         welcomeMsg.style.display='none';
    }
    else{
        welcomeMsg.style.display='block';
    }
}
document.getElementById('home-page').addEventListener('click',(e)=>{
    e.preventDefault();
    homePageDisplay();
})

function loginPageDisplay(){
    homePage.style.display='none';
    document.querySelector(`.register-section`).style.display='none';
    loginPage.style.display='block';
}

document.getElementById('login-page').addEventListener('click',(e)=>{
    e.preventDefault();
    loginPageDisplay();
    generateCaptcha();
    updateLoginCaptcha();
})

document.getElementById('logout-page').addEventListener('click',(e)=>{
    e.preventDefault();
    isLoggedIn=false;
    updateNavBar()
    loginPageDisplay();
    welcomeMsg.style.display='none'
})

function updateNavBar(){
    let loginBtn = document.getElementById('login-page');
    let logoutBtn = document.getElementById('logout-page');
    let regbtn = document.getElementById('register-page');
    let userLogo=document.getElementById('user-logo');
    
    if(isLoggedIn){
        loginBtn.style.display='none';
        regbtn.style.display='none';
        logoutBtn.style.display= 'block';
        userLogo.style.display= 'block'
    }
    else{
        loginBtn.style.display='block';
        regbtn.style.display='block';
        logoutBtn.style.display= 'none';
        userLogo.style.display= 'none'
        
    }
}
updateNavBar();

/**welcome Message */
function welcomeMessage(){
    users.forEach(getUserDetails =>{
    welcomeMsg.textContent=`${getUserDetails.first_name}`
    userNameLogo.textContent=`${getUserDetails.first_name}`
})
}

/*Registration Form*/ 
regiForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let fname=document.getElementById('fname').value.trim();
    let lname=document.getElementById('lname').value.trim();
    let email=document.getElementById('remail').value.trim();
    let password=document.getElementById('spassword').value.trim();
    let rePassword=document.getElementById('repassword').value.trim();
    let user_id=document.getElementById('userid').value.trim();
    let genderSelect=document.querySelector('input[name="gender"]:checked')?.value;
    let regcaptcha=document.getElementById('reg-captcha-input').value.trim();

    if(!email || !password || !fname || !lname || !genderSelect || !user_id){
        document.querySelector('.error-alert-box').style.display="block"
        document.querySelector('.error-alert-box').textContent=`Please fill the required filed`
       setTimeout(()=>{
        document.querySelector('.error-alert-box').style.display="none"
    },3000);
        return;
    }

    if(password.length < 8){
        document.querySelector('.error-alert-box').style.display="block"
        document.querySelector('.error-alert-box').textContent=`Password must be 8 digit`
       setTimeout(()=>{
        document.querySelector('.error-alert-box').style.display="none"
    },3000);
        return;
    }
    
    if(rePassword !== password){
        document.querySelector('.error-alert-box').style.display="block"
        document.querySelector('.error-alert-box').textContent=`passowrd doesn't match`
       setTimeout(()=>{
        document.querySelector('.error-alert-box').style.display="none"
    },3000);
        return;
    }

     if(regcaptcha.length === 0){   
        document.querySelector('.error-alert-box').style.display="block"
        document.querySelector('.error-alert-box').textContent=`captcha can't be empty`;
       setTimeout(()=>{
        document.querySelector('.error-alert-box').style.display="none"
    },3000);
        return;
    }
    if(regi_captcha_code !== regcaptcha){
        document.querySelector('.error-alert-box').style.display="block"
        document.querySelector('.error-alert-box').textContent=`captcha doesn't match`;
       setTimeout(()=>{
        document.querySelector('.error-alert-box').style.display="none"
    },3000);
        return;
    }
    document.querySelector('.success-alert-box').style.display="block"
    document.querySelector('.success-alert-box').textContent=`welcome ${user_id.toUpperCase()}...`
    clear_fields();
    setTimeout(()=>{
        generateCaptcha();
        updateRegistrationCaptcha();
    },500)
    setTimeout(()=>{
        document.querySelector('.success-alert-box').style.display="none"
    },3000);
    registrationComplete();
    
    const user={}

    user.first_name=`${fname}`;
    user.last_name=`${lname}`;
    user.email=`${email}`;
    user.password=`${password}`;
    user.user_name=`${user_id}`;
    user.isRegistered=true;

    users.push(user)
    console.log(users);
    userData();
    
})

function showRegistraionPage(){
    homePage.style.display='none'
    loginPage.style.display='none';
    document.querySelector(`.register-section`).style.display='block';
}
showRegistraionPage();

document.getElementById('register-page').addEventListener('click',(e)=>{
    e.preventDefault();
    showRegistraionPage();
    generateCaptcha();
    updateRegistrationCaptcha();
})

function registrationComplete(){
    document.querySelector(`.register-section`).style.display='none';
    loginPage.style.display='block';
}
registrationComplete();
homePageDisplay();