const results=document.getElementById('results')
const userInput=document.getElementById('userId')
//To display all posts at one place
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
displayAllPosts();

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
document.getElementById('getUserData').addEventListener('click',getUserPosts)

//When search bar is empty show all posts
userInput.addEventListener('input',()=>{
    if(userInput.value.trim()===""){
        displayAllPosts();
    }
})