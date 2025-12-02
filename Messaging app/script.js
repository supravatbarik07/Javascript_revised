let userId=document.getElementById('userId').value
const results=document.getElementById('results')

function getUserPosts(){
    if(!userId){
        alert('please enter UserId to see the post')
        return;
    }
    const url=`https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    fetch(url)
    .then(response =>response.json())
    .then(data =>{
        results.innerHTML='<p>Loadingg....</p>';
        if(data.length===0){
            results.innerHTML=`<p>There is no Posts associates with this User</p>`
        }
        data.forEach(post =>{
            results.innerHTML +=
            `<div style='border:1px solid #ccc; padding:10px;margin:10px 0'>
            <h4>${post.title}</h4>
            <p>${post.body}</p>
            </div>`;
        });
    })
       .catch(error=> console.log("Error:",error));
}
document.getElementById('getUserData').addEventListener('click',getUserPosts)