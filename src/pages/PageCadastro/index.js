import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import logo from '../../imagens/labeddit2.png';
import { ContainerCadastro, ImgLogo, FormCadastro} from './styled';

const PageCadastro = () => {
  const history = useHistory();
  const [nameValue, setUserName] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setSenhaValue] = useState("");

  const onChangeUserName = (ev) => {
    setUserName(ev.target.value);
  };
  const onChangeEmail = (ev) => {
    setEmailValue(ev.target.value);
  };
  const onChangeSenha = (ev) => {
    setSenhaValue(ev.target.value);
  };
  const criarLogin = () => {
    const body = {
      email: emailValue,
      password: passwordValue,
      username: nameValue
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup", body)
    .then((response)=>{
      localStorage.setItem('token', response.data.token)
      history.push("/feed");
    })
    .catch((error)=>{
      alert(error.response.data.message)
    })
    
  };
  const enviarEnter = (ev) => {
    if (ev.key === "Enter"){
      criarLogin();
    }
  };
  return (
    <ContainerCadastro>
      <ImgLogo src={logo}/>
      <FormCadastro>
        <TextField
          label="Nome de usuário"
          type="text"
          onChange={onChangeUserName}
        />
        <TextField label="Email" type="email" onChange={onChangeEmail} />
        <TextField label="Senha" type="password" onChange={onChangeSenha} onKeyDown={enviarEnter}/>
        <Button variant="outlined" onClick={criarLogin}>
          Cadastrar
        </Button>
      </FormCadastro>
    </ContainerCadastro>
  );
};

export default PageCadastro;
