import Card from "../components/Card";
import {useListaDeParticipantes} from "../state/hooks/useListaDeParticipantes";
import React, {useState} from "react";
import {useResultadoDoSorteio} from "../state/hooks/useResultadoDoSorteio";
import './Sorteio.css'

const Sorteio = () => {
    const participantes = useListaDeParticipantes()
    const [participanteDaVez, setParticipanteDaVez] = useState('')
    const [amigoSecreto, setAmigoSecreto] = useState('')
    const resultado = useResultadoDoSorteio()
    const sortear = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (resultado.has(participanteDaVez)) {
            setAmigoSecreto(resultado.get(participanteDaVez)!)
        }
    }
    return (
        <Card>
            <section className="sorteio">
                <h2>Quem vai tirar o papelzinho?</h2>
                <form onSubmit={sortear}>
                    <select
                        required
                        name="participanteDavez"
                        id="participanteDavez"
                        placeholder="Selecione o seu nome"
                        value={participanteDaVez}
                        onChange={evento => setParticipanteDaVez(evento.target.value)}
                    >
                        <option>Selecione seu nome</option>
                        {participantes.map(participante => <option key={participante}>{participante}</option>)}
                    </select>
                    <p>Clique em em sortear para ver quem é seu amigo secreto!</p>
                    <button className="botao-sortear">Sortear</button>
                </form>
                {amigoSecreto && <p className="resultado" role="alert">{amigoSecreto}</p>}
                <footer className="sorteio">
                    <img src="/images/aviao.png" className="aviao" alt="Um desenho de um avião de papel" />
                </footer>
            </section>
        </Card>
    )
}

export default Sorteio