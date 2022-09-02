/*setTimeout(() => {
    console.log("merhaba");
}, 2000);

setInterval(() => {
    console.log("her saniye calisacak");
}, 1000);*/

import fetch from "node-fetch"
import axios from "axios";

// asyn-await

/*async function getData() {
    const user = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
    const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
    console.log("users:", user);
    console.log("post1:", post1);
    
}

getData();*/


// axios react.js de cok kullanılıcak

/*(async () => {
    const {data: user} = await axios("https://jsonplaceholder.typicode.com/users");
    const {data: post1} = await axios("https://jsonplaceholder.typicode.com/posts/1");
    console.log("users:", user);
    console.log("post1:", post1);
})()*/

// Promise kullanımı

const getUsers = () => {
    return new Promise(async (resolve, reject) => {
        const {data} = await axios("https://jsonplaceholder.typicode.com/users");
        resolve(data);
    });
}

const getPost = (post_id) => {
    return new Promise(async (resolve, reject) => {
        const {data} = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id);
        resolve(data);
    });
}

(async ()=> {
   const users = await getUsers();

    const post = await getPost(2);

    console.log(users);
    console.log(post);
})()