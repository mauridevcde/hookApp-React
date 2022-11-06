import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage";

describe("Pruebas en <HomePage/>", () => {
  test("debe de mostrar el componente sin el usuario", () => {
    const user = {
      id: 1,
      name: "MAURICIO",
      email: "jose",
    };
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );
    // screen.debug();
    const preTag = screen.getByLabelText("pre");
    console.log(preTag.innerHTML);
    expect(preTag.innerHTML).toContain(user.name);
    expect(preTag.innerHTML).toContain(`${user.id}`);

    //expect(screen.getByText("null")).toBeTruthy();
  });
});
