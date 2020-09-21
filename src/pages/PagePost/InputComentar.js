import React from "react";
import { TextField, Button } from "@material-ui/core";
import { InputComentarios } from './styled';


const InputComentar = (props) => {
  return (
      <InputComentarios>
        <TextField
          multiline
          rowsMax={3}
          placeholder="Escreva aqui seu Comentário"
          onChange={props.onChange}
        >
          Escreva seu comentario
        </TextField>
        <Button variant="contained" onClick={props.onClick}>Comentar</Button>
      </InputComentarios>
  );
};

export default InputComentar;
