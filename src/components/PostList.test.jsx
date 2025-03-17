import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import PostList from "./PostList";

describe("PostList Componente", () => {
    it('Deveria Renderizar a lista de post', () => {
        render(<PostList />)

        expect(screen.getByText('Primeiro Post')).toBeInTheDocument();
        expect(screen.getByText('Esse é um resumo do primeiro post')).toBeInTheDocument();
        expect(screen.getByText('João - 01/01/2021')).toBeInTheDocument();
    })
})