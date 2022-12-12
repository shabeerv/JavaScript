import axios from "axios";

export const userLogin = async ( {email, password} ) => {
    const data = JSON.stringify({
        email: email,
        password: password,
    });
  
    const config = {
        method: "POST",
        url: "http://localhost:8000/auth/login",
        headers: {
            "Content-Type": "application/json",
        },
        data: {email,},
    };
  
    try {
        const response = await axios(config);
        console.log(response.data)
        return response.data;
    } catch (error) {
        return error;
    }
}