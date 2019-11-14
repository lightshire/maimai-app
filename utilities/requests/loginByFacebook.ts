import axios from '../axios'

interface Values {
    name: string,
    phone_number: string,
    password: string,
    source: string,
    email: string
}
export default (values: Values) => {
    return axios.post('/api/register/facebook', {
        ...values
    })
}
