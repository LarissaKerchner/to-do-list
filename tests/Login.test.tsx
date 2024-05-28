import React from "react";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react"
import App from "../src/App"
import "@testing-library/jest-dom"
import { MemoryRouter } from "react-router-dom";

describe("Testando a página de login", () => {
    test("deve carregar corretamente a pagina de login", () => {
        render(
            <MemoryRouter>
                <App/>
            </MemoryRouter>
        );
        const passwordText = screen.getByText(/Welcome/i);

        expect(passwordText).toBeInTheDocument();
    })
})