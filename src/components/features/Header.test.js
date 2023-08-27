import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./components/features/Header";

afterEach(() => {
    cleanup();
});

test("Should render Header component", () =>{

render(<Header />)

let textElem = screen.getByTestId("text");

expect(textElem).toBeInTheDocument();
})