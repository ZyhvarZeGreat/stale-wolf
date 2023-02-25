import axios from "axios";


 async function fetchRequests() {
    const {data} = await axios.get('https://stalewolf.onrender.com/api/request')
    return data
}

export default fetchRequests