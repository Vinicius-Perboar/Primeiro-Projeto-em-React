import { format, formatDistanceToNow } from 'date-fns'; //Importando biblioteca para trabalhar com formatação
import ptBR from 'date-fns/locale/pt-BR' //Importando o idioma necessário

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css'

export function Post({author, content, publishedAt}){
    
    const publishedDateFormated = format(publishedAt, " d 'de' LLLL 'às' H:mm'h'",{
        locale: ptBR,
    }) //Criando uma constante para receber a data de publicação e formatá-la corretamente

    const publishedDateRelative = formatDistanceToNow(publishedAt,{
        locale: ptBR,
        addSuffix: true,
    }) //Criando uma constante que calcula a quanto tempo a publicação foi feita

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
                        return <p>{line.content}</p>
                    }
                    else if(line.type == 'link'){
                        return <p><a href="">{line.content}</a></p>
                    }
                })} 
            </div>

            <form className={styles.comment}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer> 
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
}