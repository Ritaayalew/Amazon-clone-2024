import axios from 'axios';

const instance=axios.create({
    baseURL: 'http://127.0.0.1:5001/novemb-f2496/us-central1/api',
    //to be replaced with a remote url
});

export default instance;