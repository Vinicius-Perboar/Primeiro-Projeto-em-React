import { Comment } from './Comment';
import styles from './Post.module.css'

export function Post(){
    return(
        <article className={styles.post}>
            <header className={styles.headerFirstLevel}> 
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/AndreColi.png" alt="Foto de perfil" />
                    <div className={styles.authorInfo}>
                        <strong>André Igor</strong>
                        <span>Backend Developer</span>
                    </div>
                </div>

                <time title="4 de Outubro às 12:43" datetime="2024-10-04 12:43:00">Publicado a 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz estudando de NodeJs, como eu amo essa área. 🚀</p>
                <p><a href="">👉{' '}AndreColi/ProjetoNodeJs</a></p>
                <p>
                    <a href="">#novoprojeto</a>{' '} 
                    <a href="">#nodejs</a>
                </p>
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