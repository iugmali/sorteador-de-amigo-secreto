import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.cabecalho}>
            <div className={styles['imagem-logo']} role="img" aria-label='Logo do Sorteador'></div>
            <img className={styles.participante} src="/images/participante.png" alt="Participante com um presente na mão" />
        </header>
    )
}

export default Header;