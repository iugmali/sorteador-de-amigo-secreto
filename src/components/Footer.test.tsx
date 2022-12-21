import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import {RecoilRoot} from "recoil";
import Footer from "./Footer";
import {useListaDeParticipantes} from "../state/hooks/useListaDeParticipantes";

jest.mock('../state/hooks/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
})
const mockNavegacao = jest.fn()
const mockSorteio = jest.fn()

jest.mock('../state/hooks/useSorteador', () => {
    return {
        useSorteador: () => mockSorteio
    }
})

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
})


describe('Quando não existem participantes suficientes' , () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })
    test('a brincadeira não pode ser iniciada', () => {
        render(<RecoilRoot>
            <Footer />
        </RecoilRoot>)
        const button = screen.getByRole('button')
        expect(button).toBeDisabled()
    })
})

describe('Quando existem participantes suficientes' , () => {
    const participantes = ['Guilherme', 'Gustavo', 'Tereza']
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
    })
    test('a brincadeira pode ser iniciada', () => {
        render(<RecoilRoot>
            <Footer />
        </RecoilRoot>)
        const button = screen.getByRole('button')
        expect(button).not.toBeDisabled()
    })
    test('a brincadeira foi iniciada', () => {
        render(<RecoilRoot>
            <Footer />
        </RecoilRoot>)
        const button = screen.getByRole('button')
        fireEvent.click(button)
        expect(mockNavegacao).toHaveBeenCalledTimes(1)
        expect(mockNavegacao).toHaveBeenCalledWith('/sorteio')
        expect(mockSorteio).toHaveBeenCalledTimes(1)
    })
})