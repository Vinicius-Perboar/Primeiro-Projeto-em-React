import styles from './Avatar.module.css';

export function Avatar({hasBorder = true, src}){ //Utilizando pela primeira vez um componente com propriedade, buscando avatares que possuam borda = true e src
    return(
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={src} alt="Foto de perfil" />
        //Se hasBorder=true, chama a classe .avatarWithBorder, se não, chama a classe .avatar
    );
}
