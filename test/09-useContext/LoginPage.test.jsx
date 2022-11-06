import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe("pruebas en el <LoginPage/>", () => {
//   test("debe de mostrar el componente sin el usuario", () => {
//     render(
//       <UserContext.Provider value={{ user: null }}>
//         <LoginPage />
//       </UserContext.Provider>
//     );
//     const pre = screen.getByLabelText("pre");
//     expect(pre.innerHTML).toBe("null");
//   });

    test("debe llamar el setUser cuando se hace click en el boton loguear", () => {
      const setUserMock = jest.fn();
      render(
        <UserContext.Provider value={{ user: null, setuser: setUserMock}}>
          <LoginPage />
        </UserContext.Provider>
      ); 

      const botons = screen.getByRole("button");
      fireEvent.click(botons);
        
      expect( setUserMock ).toHaveBeenCalledWith({ id: 1, name: "Mauricio" });

    });
});
