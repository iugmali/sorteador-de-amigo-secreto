import {useRecoilValue} from "recoil";
import {mensagemDeErroState} from "../atom";

export const useMensagemDeErro = () => {
    const mensagem = useRecoilValue(mensagemDeErroState)
    return mensagem
}