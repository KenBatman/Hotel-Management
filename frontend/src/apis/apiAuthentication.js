import axios from "axios"

export const login = async(username, password) =>{
    try{
        const response  = await axios.post("/TaiKhoan.json", {
            username,
            password,
        });

        return response.data;
    }catch(e){
        console.error("Error fetching data");
    }
}