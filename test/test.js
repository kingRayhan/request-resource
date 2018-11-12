import http from '../index'

http.post(`https://jsonplaceholder.typicode.com/posts`, {
    title: 'new Post',
    body: 'new post body',
}).then(res => {
    console.log(res)
})
