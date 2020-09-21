import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import logo from '../../imagens/labeddit2.png';
import { ContainerPageLogin, ImgLogo, FormLogin} from './styled';

const PageLogin = () => {
  const history = useHistory();
  const [emailValue, setEmailValue] = useState("");
  const [senhaValue, setSenhaValue] = useState("");

  const onChangeEmail = (ev) => {
    setEmailValue(ev.target.value);
  };
  const onChangeSenha = (ev) => {
    setSenhaValue(ev.target.value);
  };

  const fazerLogin = () => {
    const body = {
      email: emailValue,
      password: senhaValue,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login",
        body
      )
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        history.push("/feed");
      })
      .catch((error) => {
        alert(error.response.data.message)
      });
  };

  const fazerCadastro = () => {
    history.push("/cadaster");
  };
  const enviarEnter = (ev) => {
    if (ev.key === "Enter"){
      fazerLogin();
    }
  };

  return (
    <ContainerPageLogin>
      <ImgLogo src={logo}/>
      <FormLogin>
        <TextField type="email" label="Email" onChange={onChangeEmail}/>
        <TextField type="password" label="Password" onChange={onChangeSenha} onKeyDown={enviarEnter}/>
        <Button variant="outlined" onClick={fazerLogin}>Entrar</Button>
        <Button variant="outlined" onClick={fazerCadastro}>
          Cadastrar
        </Button>
      </FormLogin>
    </ContainerPageLogin>
  );
};

export default PageLogin;
