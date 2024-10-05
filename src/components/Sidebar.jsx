import {PencilSimpleLine} from 'phosphor-react'
import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Imagem de Capa do usuário" />

            <div className={styles.profile}>
                <Avatar src="https://github.com/Vinicius-Perboar.png"/>
                <strong>Vinícius Perboar</strong>
                <span> Web Developer</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilSimpleLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>    
    );
}