import {useListaDeParticipantes} from "../state/hooks/useListaDeParticipantes";
import {useNavigate} from "react-router-dom";
import styles from './Footer.module.css'
import {useSorteador} from "../state/hooks/useSorteador";

const Footer = () => {
    const participantes = useListaDeParticipantes()
    const navigate = useNavigate()
    const sortear = useSorteador()
    const iniciar = () => {
        sortear()
        navigate('/sorteio')
    }
    return (
        <footer className={styles['rodape-configuracoes']}>
            <button
                className={styles.botao}
                disabled={participantes.length < 3}
                onClick={iniciar}
            >
                Iniciar brincadeira
            </button>
        </footer>
    )
}

export default Footer