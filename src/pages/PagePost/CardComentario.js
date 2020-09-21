import React from 'react';
import UpIcon from "@material-ui/icons/ArrowUpwardOutlined";
import DownIcon from "@material-ui/icons/ArrowDownward";
import { CardComentarios, Title, TextPost, BottomPost, Votos } from './styled';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CardComentario = (props) => {
    let curtida = props.userVoteDirection
    const pathParams = useParams();
    const token = localStorage.getItem('token');

    const votoPositive = () => {
        if(curtida === 0){
            curtida = 1
        }else if(curtida === 1){
            curtida =0
        }
        const body = {
            direction: curtida
        }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${pathParams.idPost}/comment/${props.commentId}/vote`, body, {
                headers: {
                    Authorization: token
                }
            }).then(resposta => {
                console.log(resposta.data);

            }).catch(error => {
                console.error(error);
            })
    };

    const votoNegative = () => {
        if(curtida === 0){
            curtida = -1
        }else if(curtida === -1){
            curtida = 0
        }
        const body = {
            direction: curtida
        }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${pathParams.idPost}/comment/${props.commentId}/vote`, body, {
                headers: {
                    Authorization: token
                }
            }).then(resposta => {
                console.log(resposta.data);

            }).catch(error => {
                console.error(error);
            })
    };

        return (
            <CardComentarios>
                <Title>
                    <p>{props.username}</p>
                </Title>
                <TextPost>{props.text}</TextPost>
                <BottomPost>
                    <Votos>
                        <UpIcon onClick={votoPositive} />{props.votesCount}<DownIcon onClick={votoNegative}/>
                    </Votos>
                </BottomPost>
            </CardComentarios>
        )
    }

    export default CardComentario