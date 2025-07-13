import {useEffect} from "react"
import { useDispatch } from 'react-redux'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { USER_API_ENDPOINT } from "../../utils/apiendpoint";
import { setUser } from "../redux/authSlice";

const useCheckUser = () => {
    let dispatch = useDispatch();
    let navigate = useNavigate();

    useEffect(() => {
        const checkUser = async() => {
            try{
                let res = await axios.get(`${USER_API_ENDPOINT}/checkuser` , {
                    withCredentials : true,
                });

                if(res.data.success){
                    console.log(res.data.name)
                    dispatch(setUser(res.data.name));
                    return;
                }
            }
            catch(e){
                navigate("/signup");
                console.log(e);
            }
        }

        checkUser();
    } , [])
}

export default useCheckUser;