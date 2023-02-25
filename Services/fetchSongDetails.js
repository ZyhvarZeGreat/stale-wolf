import axios from 'axios'

async function fetchSongDetails(){
    const {data} = await axios.get('https://stalewolf.onrender.com/api/music')
    return data
}

export default fetchSongDetails
