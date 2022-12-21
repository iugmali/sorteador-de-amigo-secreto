import React from "react";
import Form from "./Form";
import {act, fireEvent, render, screen} from "@testing-library/react";
import {RecoilRoot} from "recoil";

describe('Comportamento do Form.tsx', () => {
    test('Quando o input está vazio, novos participantes não podem ser adicionados', () => {
        render(<RecoilRoot><Form /></RecoilRoot>)
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        const button = screen.getByRole('button')
        expect(input).toBeInTheDocument()
        expect(button).toBeDisabled()
    })

    test('Adicionar um participante caso exista um nome preenchido', () => {
        render(<RecoilRoot><Form /></RecoilRoot>)
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        const button = screen.getByRole('button')
        fireEvent.change(input, {
            target: {
                value: 'Guilherme'
            }
        })
        fireEvent.click(button)
        expect(input).toHaveFocus()
        expect(input).toHaveValue('')
    })

    test('Nomes duplicados não podem ser adicionados', () => {
        render(<RecoilRoot><Form /></RecoilRoot>)
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        const button = screen.getByRole('button')
        fireEvent.change(input, {
            target: {
                value: 'Guilherme'
            }
        })
        fireEvent.click(button)
        fireEvent.change(input, {
            target: {
                value: 'Guilherme'
            }
        })
        fireEvent.click(button)
        const mensagemDeErro = screen.getByRole('alert')
        expect(mensagemDeErro.textContent).toBe('Nomes duplicados não são permitidos!')
    })

    test('A mensagem de erro deve se apagar após timers', () => {
        jest.useFakeTimers()
        render(<RecoilRoot><Form /></RecoilRoot>)
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        const button = screen.getByRole('button')
        fireEvent.change(input, {
            target: {
                value: 'Guilherme'
            }
        })
        fireEvent.click(button)
        fireEvent.change(input, {
            target: {
                value: 'Guilherme'
            }
        })
        fireEvent.click(button)
        let mensagemDeErro = screen.queryByRole('alert')
        expect(mensagemDeErro).toBeInTheDocument()
        act(() => {
            jest.runAllTimers()
        })
        mensagemDeErro = screen.queryByRole('alert')
        expect(mensagemDeErro).toBeNull()
    })
})

