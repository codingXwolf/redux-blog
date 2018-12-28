import axios from 'axios';

export default axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com' //url from jsonplaceholer/resources/posts
});