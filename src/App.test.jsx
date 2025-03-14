import { describe, expect, test, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("demo", () => {
    expect(1 + 1).toBe(2)
})

//Criando teste do componente

describe("App Componente", () => {
    it('should render the tittle', () => {
        render(<App />) // Renderizando a tela do App
        expect(screen.getByText('Vite + React')).toBeInTheDocument(); // Verificando se o texto está no componente renderizado
    })

    it('Deveria contar quando clicar no botão')
})