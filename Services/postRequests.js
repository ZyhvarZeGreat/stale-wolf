import axios from "axios";


async function postRequests(request) {
    const { data } = await axios.post('https://stalewolf.onrender.com/api/request',request)
    return data
}
export default postRequests