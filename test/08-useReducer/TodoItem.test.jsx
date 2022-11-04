import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe("Pruebas en el componente TodoItem", () => {
  const todo = {
    id: 1,
    desc: "Aprender React",
    done: false,
  };
  const onDeleteMock = jest.fn();
  const onToggleMock = jest.fn();

  beforeEach(() => {
    () => {
      jest.clearAllMocks();
    };
  });

  // test("Debe de mostrarse el todo pendiente a completar", () => {
  //   render(
  //     <TodoItem
  //       todo={todo}
  //       onDeleteTodo={onDeleteMock}
  //       onToggleTodo={onToggleMock}
  //     />
  //   );

  //   const liElement = screen.getByRole("listitem");
  //   //console.log(liElement.className);
  //   expect(liElement.className).toBe(
  //     "list-group-item d-flex justify-content-between"
  //   ); // verifica que el elemento li tenga la clase list-group-item d-flex justify-content-between

  //   const spanElement = screen.getByLabelText('spanTesting');
  //   console.log(spanElement.className);
  //   expect(spanElement.className).toContain("text-decoration-line-through");//comprueba que el elemento span tenga la clase align-self-center
  // });

  // test("Debe de mostrarse el todo completado", () => {

  //   todo.done = true;
  //   render(
  //     <TodoItem
  //       todo={todo}
  //       onDeleteTodo={onDeleteMock}
  //       onToggleTodo={onToggleMock}
  //     />
  //   );
  //  console.log(todo);

  //   const spanElement = screen.getByLabelText('spanTesting');
  //   console.log(spanElement.className);
  //   expect(spanElement.className).toContain("align-self-center");//comprueba que el elemento span tenga la clase align-self-center
  // });

  // test("Debe de llamar el toggleTodo cuando se hace click", () => {
  //   render(
  //     <TodoItem
  //       todo={todo}
  //       onDeleteTodo={onDeleteMock}
  //       onToggleTodo={onToggleMock}
  //     />
  //   );

  //   const spanElement = screen.getByLabelText('spanTesting');
  //   fireEvent.click(spanElement);
  //   expect(onToggleMock).toHaveBeenLastCalledWith(todo.id); // verifica que la funcion onToggleMock haya sido llamada con el id del todo


  // });

  test("button debe de llamar el deletetodo", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteMock}
        onToggleTodo={onToggleMock}
      />
    );

    const deleteButton = screen.getByRole('button');
    fireEvent.click(deleteButton);
    expect(onDeleteMock).toHaveBeenLastCalledWith(todo.id); // verifica que la funcion onDeleteMock haya sido llamada con el id del todo


  });

});
