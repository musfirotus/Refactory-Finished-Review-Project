const axios = require('axios')

const urlPost = 'https://jsonplaceholder.typicode.com/posts'
const urlUser = 'https://jsonplaceholder.typicode.com/users'

function getPost() {
    return axios.get(urlPost)
}

function getUser() {
    return axios.get(urlUser)
}

axios.all([
    getPost(), 
    getUser()
  ])
  .then(axios.spread((users, posts) => {
    const hasil = users.data.map(a => Object.assign(a, posts.data.find(b => b.id == a.userId)));
    console.log(hasil);
  }));