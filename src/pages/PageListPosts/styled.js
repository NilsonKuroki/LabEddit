import styled from 'styled-components'

//index
export const ContainerPageListPosts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    padding: 1%;
`;

//newPost
export const ContainerPost = styled.div`
    width: 90%;
    border: 1px solid black;
    display:flex;
    flex-direction: column;
`;

//post
export const CaixaPost = styled.div`
  border: 1px solid black;
  width: 90%;
  min-height: 200px;
  margin: 7px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  `;
export const ContainerTextPost = styled.div`
  width: 100%;
  min-height: 150px;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  `;
  export const ContainerFooter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
export const ContainerReaction = styled.div`
  display: flex;
  align-items: center;
`;

