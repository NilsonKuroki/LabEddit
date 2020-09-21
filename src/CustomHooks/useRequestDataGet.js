import {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


export const useRequestDataGet = (url, initialState) =>{
    const [data, setData] = useState(initialState)
    const history =  useHistory()

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if (token === null) {
            history.push("/");
        }
        axios.get(url, {
            headers:{
                Authorization: token
            }
        }).then((response)=>{
            setData(response.data.posts)
        }).catch((error)=>{
            alert(error.response.message)
        })
    },[url, history])

    return data
};

