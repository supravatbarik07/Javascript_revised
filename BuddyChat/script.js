const errorMsg=document.getElementById('error');
const welcomemsg=document.getElementById('welcomemsg');
//dashboard display all posts
function showPage(pageId){
    document.querySelectorAll('.page').forEach(page =>
        page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

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
        // errorMsg.textContent='';
        // errorMsg.textContent=`Login Successful! Welcome User ${data.name} (ID: ${data.id})`;
        showPage('feedPage');
        displayAllPosts();
        welcomemsg.innerHTML=`<p>Welcome ${data.name}</p>`
    })
    .catch(error => {
        console.log("Error:",error);
    })
}
document.getElementById('loginBtn').addEventListener('click',logInUser)

//To clear the form inputs and error message
function resetForm(){
    document.getElementById('login-credentials').reset();
    errorMsg.textContent='';
}
document.getElementById('resetBtn').addEventListener('click',resetForm);

// <!--logout functionality-->
document.getElementById('logoutBtn').addEventListener('click',()=>{
    showPage('loginPage');
})

/**Dispaly all posts */
function displayAllPosts(){
fetch(`https://jsonplaceholder.typicode.com/posts`)
.then(response=>response.json())
.then(data=>{
    results.innerHTML='';
    if(data.length===0){
        results.innerHTML='<p>No posts available right now</p>'
    }
    data.forEach(post => {
        results.innerHTML += `
        <div class="result-card">
            <div class="avatar">${post.userId}</div>
            <div class="result-content">
                <div class="result-header">
                    <span class="result-username">User ${post.userId}</span>
                    <span class="result-date">Post #${post.id}</span>
                </div>
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                    <div class="result-actions">
                        <button class="action-btn">Like</button>
                        <button class="action-btn">Comment</button>
                    </div>
            </div>
        </div>`;
    });
})
}
// to search the perticular user posts
function getUserPosts(){
    const userId=document.getElementById('userId').value.trim();
    if(!userId){
        alert('please enter the userId')
        return;
    }
    results.innerHTML='<p>Loadingg....</p>';
    const url=`https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    fetch(url)
    .then(response =>response.json())
    .then(data =>{
        results.innerHTML='';
        if(data.length===0){
            results.innerHTML=`<p>There is no Posts associates with this User</p>`
        }
        data.forEach(post => {
            results.innerHTML += `
            <div class="result-card">
                <div class="avatar">${post.userId}</div>
                <div class="result-content">
                    <div class="result-header">
                        <span class="result-username">User ${post.userId}</span>
                        <span class="result-date">Post #${post.id}</span>
                    </div>
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                        <div class="result-actions">
                            <button class="action-btn">Like</button>
                            <button class="action-btn">Comment</button>
                        </div>
                </div>
            </div>`;
        });
    })
       .catch(error=> console.log("Error:",error));
}
document.getElementById('getUserData').addEventListener('click',getUserPosts);

//When search bar is empty show all posts
const userInput=document.getElementById('userId');
userInput.addEventListener('input',()=>{
    if(userInput.value.trim()===""){
        displayAllPosts();
    }
})