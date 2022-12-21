import React from "react";
import {render, screen} from "@testing-library/react";
import {RecoilRoot} from "recoil";
import ListaParticipantes from "./ListaParticipantes";
import {useListaDeParticipantes} from "../state/hooks/useListaDeParticipantes";

jest.mock('../state/hooks/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})

describe('Comportamento de lista de participantes vazia', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })
    test('Lista de participantes inicialmente vazia', ()=> {
        render(<RecoilRoot>
            <ListaParticipantes />
        </RecoilRoot>)
        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(0)
    })
})
describe('Comportamento de lista de participantes preenchida', () => {
    const participantes = ['Guilherme', 'Gustavo']
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
    })
    test('Lista de participantes preenchida', ()=> {
        render(<RecoilRoot>
            <ListaParticipantes />
        </RecoilRoot>)
        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(participantes.length)
    })
})