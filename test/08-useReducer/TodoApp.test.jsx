import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodos } from "../../src/08-useReducer/useTodos";

jest.mock("../../src/08-useReducer/useTodos");

describe("pruebas en TodoApp", () => {
  //mockreturnvalue es para simular el valor que retorna el useTodos
  useTodos.mockReturnValue({
    todos: [
      {
        id: 1,
        desc: "Aprender React",
        done: false,
      },
      {
        id: 2,
        desc: "Aprender Mongo",
        done: false,
      },
    ],
    todosCount: 2,
    pendingTodoCount: 1,
    handleNewTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
  });

  test("debe mostrar el componente correctamente", () => {
    render(<TodoApp />);

    expect(screen.getByText("Aprender React")).toBeTruthy();
    expect(screen.getByText("Aprender Mongo")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
