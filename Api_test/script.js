let result=document.getElementById('result');

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())//using '.then'
.then(data =>
{
    const status=data.completed ? "completed" : "pending";
    result.innerHTML=`
    <h2>Title:-${data.title}</h2>
    <h3>Id:-${data.id}</h3>
    <h3>UserId:-${data.userId}</h3>
    <h3>Status:- ${status}</h3>`;
}
)
.catch(error =>
    console.error('Error', error)
);

const message_box=document.getElementById('message_box');
// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(response =>response.json())
// .then(data=>{
//     message_box.innerHTML=`
//      <h3>${data.title}</h3>
//     <span>User=>${data.userId}</span>
//     <p>Caption:- ${data.body}</p>
//    `
// })

//using async & await
async function loadData() {
    const response=await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data=await response.json();
    message_box.innerHTML=`
    <h3>${data.title}</h3>
    <span>User:- ${data.userId}</span>
    <p>Caption:- ${data.body}</p>`
}
loadData();

// .then and await/async have same work 
// | `.then()` version           | `async/await` version               |
// | --------------------------- | ----------------------------------- |
// | Runs using chained promises | Looks like normal step-by-step code |
// | Harder to read              | Cleaner & easier                    |
// | Same behavior               | Same behavior                       |
