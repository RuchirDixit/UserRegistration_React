import axios from 'axios'

export const loginService = async(email,pass) => {
    console.log("Email:"+email)
    console.log("Pass:"+pass);
    var params = new URLSearchParams();
    params.append("email",email);
    params.append("password",pass);

    var request = {
        params: params
      };
    const LOGIN_URL = "http://localhost:8081/user/login";
    const result = await axios.get(LOGIN_URL,request);
    
    return result.data;
  }