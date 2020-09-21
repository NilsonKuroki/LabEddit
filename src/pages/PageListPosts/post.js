import React from 'react';
import UpIcon from '@material-ui/icons/ArrowUpwardOutlined';
import DownIcon from '@material-ui/icons/ArrowDownward';
import IconButton from '@material-ui/core/IconButton';
import {useHistory} from 'react-router-dom';
import { ContainerFooter, CaixaPost, ContainerTextPost, ContainerReaction} from './styled';

const Post = (props)=>{

    const history = useHistory()

    const handlePagePost = ()=>{
        history.push(`${props.idPost}`)
    }
    
    return(
        <CaixaPost>
            <h5>{props.nomeUser}</h5>
            <ContainerTextPost onClick={handlePagePost}>
                <h4>{props.titlePost}</h4>
                <p>{props.textPost}</p>
            </ContainerTextPost>
            <ContainerFooter>
                <ContainerReaction>
                    <IconButton>
                        <UpIcon fontSize="inherit" />
                    </IconButton>
                    <p>{props.votesCount}</p>
                    <IconButton>
                        <DownIcon fontSize="inherit" />
                    </IconButton>
                </ContainerReaction>
                <p>{props.commentsCount} comentarios</p>
            </ContainerFooter>
        </CaixaPost>
    )
}
export default Post