import { describe, expect, test, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("demo", () => {
    expect(1 + 1).toBe(2)
})

//Criando teste do componente

describe("App Componente", () => {
    it('should render the tittle', () => {
        render(<App />) // Renderizando a tela do App
        expect(screen.getByText('Bem Vindo ao Blog Commitando!')).toBeInTheDocument(); // Verificando se o texto está no componente renderizado
    })

    // Testando o button de forma assincrona //
    // it('Deveria contar quando clicar no botão', async () => {
    //     render(<App />)
    //     const button = screen.getByRole('button', { name: "count is 0"});
    //     await userEvent.click(button) // Esperando o resultado do estado do botão mudar //

    //     expect(screen.getByText('count is 1')).toBeInTheDocument()
    // })
})