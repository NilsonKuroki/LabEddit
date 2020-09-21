import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import { ContainerPost } from './styled';

const NewPost = ()=>{
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const onChangeTitle = (event)=>{
        setTitle(event.target.value)
    }
    const onChangeText = (event)=>{
        setText(event.target.value)
    }

    useEffect(()=>{

    },[])
    const enviar = ()=>{
        const body ={
            title: title,
            text: text
        }

        const token = localStorage.getItem('token')
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts', body,
        {
            headers: {authorization: token}
        })
        .then((response)=>{
            if(response.data.sucess){
                alert("Post Criado!")
            }
        })
        .catch((error)=>{
            alert(error.response.data.message)
        })
        setText('')
        setTitle('')
    }

    return(
        <ContainerPost>
        <TextField 
            label="titulo" 
            value={title} 
            onChange={onChangeTitle}/>
        <TextField 
            multiline
            rows={4}
            label="Escreva algo!!"
            value={text}
            onChange={onChangeText}
        />
        <Button onClick={enviar}>Postar</Button>
    </ContainerPost>
    )
}

export default NewPost