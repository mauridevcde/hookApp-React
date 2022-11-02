import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";
jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");
describe("Pruebas en <MultipleCustomHooks />", () => {
  const mockIncrement = jest.fn(); // mock function: es una funcion que se crea para simular el comportamiento de otra funcion

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement, //se le pasa el mockIncrement como argumento
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  //   test("debe de mostrarse correctamente", () => {
  //     render(<MultipleCustomHooks />);

  //     expect(screen.getByText("Cargando..."));
  //     expect(screen.getByText("MultipleCustomHooks"));

  //     const nextButton = screen.getByRole('button', { name: 'Siguiente frase' });
  //     expect(nextButton.disabled).toBeTruthy();
  //     screen.debug();
  //   });

  //   test("debe de mostrar la información", () => {
  //     useFetch.mockReturnValue({ data: [{author: 'Mauricio', quote: "Hola mundo"}], loading: false, hasError: null });

  //     render(<MultipleCustomHooks />);

  //     expect(screen.getByText("Hola mundo")).toBeTruthy();
  //     expect(screen.getByText("Mauricio")).toBeTruthy();

  //     const nextButton = screen.getByRole('button', { name: 'Siguiente frase' });
  //       expect(nextButton.disabled).toBeFalsy();
  //     screen.debug();
  //   });

  test("debe de llamar la funcion de incrementar", () => {
    //
    useFetch.mockReturnValue({
      data: [{ author: "Mauricio", quote: "Hola mundo" }],
      loading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    const nextButton = screen.getByRole("button", { name: "Siguiente frase" });

    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
