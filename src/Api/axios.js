import axios from 'axios'

const axiosInstance=axios.create({
    // baseURL:"http://127.0.0.1:5001/clone-4cfbf/us-central1/api",
    baseURL:"https://amazon-api-deploy-jixn.onrender.com/"
});

export {axiosInstance};