import { format, formatDistanceToNow } from 'date-fns'; //Importando biblioteca para trabalhar com formatação
import ptBR from 'date-fns/locale/pt-BR' //Importando o idioma necessário

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css'
import { useState } from 'react'; //Iniciando conceito de estados

    
export function Post({author, content, publishedAt}){

    const [comments, setComments] = useState([]) //Criando o primeiro estado, se trata da variável comentários, que precisa inserir um a cada vez que clicar no botão publicar

    const [newCommentText, setNewCommentText] = useState('')
    
    const publishedDateFormated = format(publishedAt, " d 'de' LLLL 'às' H:mm'h'",{
        locale: ptBR,
    }) //Criando uma constante para receber a data de publicação e formatá-la corretamente

    const publishedDateRelative = formatDistanceToNow(publishedAt,{
        locale: ptBR,
        addSuffix: true,
    }) //Criando uma constante que calcula a quanto tempo a publicação foi feita

    function handleCreateNewComent(){ //Função será acionada quando o botão submit "publicar" for acionado
        event.preventDefault() //Impede que o botão submit faça sua ação padrão, de passar para outra tela
        setComments([ ...comments, newCommentText]); //Sempre que a função for acionada, ela irá pegar o array antigo de comentários e adicionar mais um
        setNewCommentText('');
    }

    function handleNewCommentChange(){
        setNewCommentText(event.target.value);
        // event.target.setCustomValidity(''); - 2º FORMA DE VALIDAÇÃO DE FORMULÁRIO
    }

    // function handleNewCommentInvalid(){
    //     event.target.setCustomValidity('Esse campo é obrigatório!');
    // } - 2º FORMA DE VALIDAÇÃO DE FORMULÁRIO

    function deleteComment(commentToDelete){
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete}
        )
        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length == 0;
 
    return(
        <article className={styles.post}>
            <header className={styles.headerFirstLevel}> 
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} /> 
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormated} datetime={publishedAt.toISOString()}>{publishedDateRelative}</time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if(line.type == 'paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    }
                    else if(line.type == 'link'){
                        return <p key={line.content}><a href="">{line.content}</a></p>
                    }
                })} 
            </div>

            <form onSubmit={handleCreateNewComent} className={styles.comment}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    placeholder='Deixe um comentário'
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    //onInvalid={handleNewCommentInvalid} - 2º FORMA DE VALIDAÇÃO DE FORMULÁRIO
                    //required - 1º FORMA DE VALIDAÇÃO DE FORMULÁRIO
                />

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer> 

            </form>

            <div className={styles.commentList}>
                {comments.map(comment => { //Iterando os comentários assim como foram iterados os posts
                    return( 
                        <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>
                    )
                })}
            </div>

        </article>
    );
}