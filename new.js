// let url = "https://jsonplaceholder.typicode.com/users";

const fetchApi = (url)=>{
    fetch(url).then(res=>{
        // console.log(res);
        if (res.ok) return res.json()
        else console.error("Something went wrong")
    }).then(v=>{
        console.log(v);
    }).catch(reason => console.error(reason))
}


fetchApi("https://jsonplaceholder.typicode.com/users")
fetchApi("https://jsonplaceholder.typicode.com/albums")