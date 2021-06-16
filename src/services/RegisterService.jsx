import axios from 'axios'

const POST_URL = 'http://localhost:8081/user/newUser';
class RegisterService {
    // addUser = async data => {
    //     axios.post(POST_URL,data).then((response) =>{
    //         console.log("Response:"+response);
    //     }).catch((error) => {
    //         console.log(error);
    //     })
    // }
    addUser = async data => {
        console.log("Data:"+data.firstName);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch(POST_URL,requestOptions).then(res => console.log("Added")).catch(err => console.log("error"))
    }
    
}
export default new RegisterService()