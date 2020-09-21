import styled from 'styled-components'

// Component Index
export const ContainerPosts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: flex-start;
`;
export const CardPost = styled.div`
  height: 25%;
  width: 90%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px;
`;
export const Title = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: gray;
  color: white;
  text-transform: capitalize;
`;
export const TextPost = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
export const TituloPost = styled.h4`
  margin: 2px;
`;
export const BottomPost = styled.div`
  width: 100%;
  height: 20%;
  border-top: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Votos = styled.div`
  display: flex;
  align-items: center;
`;
export const Comentarios = styled.div``;
export const InputComentarios = styled.div`
  height: 20%;
  width: 90%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 15px;
`;

// compinent CardComentario
export const CardComentarios = styled.div`
  height: 25%;
  width: 90%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15px;
`;



