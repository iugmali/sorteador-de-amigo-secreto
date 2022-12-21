import React from "react";
import {render} from "@testing-library/react";
import {RecoilRoot} from "recoil";
import ConfigPage from "./ConfigPage";

const mockNavegacao = jest.fn()
jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
})

describe('a página de configuração', () => {
    test('deve ser renderizada corretamente', () => {
        const {container} = render(<RecoilRoot>
            <ConfigPage />
        </RecoilRoot>)
        expect(container).toMatchSnapshot()
    })
})