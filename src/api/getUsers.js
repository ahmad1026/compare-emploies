import axios from 'axios'
export const fetchUsers = async () => {

    const res = await axios.get('http://localhost:3001/users')


    return res.data

}