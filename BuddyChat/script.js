const errorMsg=document.getElementById('error');

function logInUser() {
    event.preventDefault(); // <-- Prevent form refresh
    const emailInput = document.getElementById('email').value.trim();
    const passwordInput = document.getElementById('password').value.trim();
   
    if(!emailInput || !passwordInput){
        errorMsg.textContent='Please enter the both email and password.';
        return; //to stop further execution or prevents the function from continuing when the input is invalid.
    }
    // Simulate successful login
    function generateNumber() {
        return Math.floor(Math.random()*10)+1
    }
    const userId=generateNumber();
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response =>response.json())
    .then(data =>{
        errorMsg.textContent='';
        errorMsg.textContent=`Login Successful! Welcome User ${data.name} (ID: ${data.id})`;
    })
    .catch(error => {
        console.log("Error:",error);
    })
}
document.getElementById('loginBtn').addEventListener('click',logInUser)
