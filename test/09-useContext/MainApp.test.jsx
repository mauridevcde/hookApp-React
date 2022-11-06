const { render, screen } = require("@testing-library/react");
const { MemoryRouter } = require("react-router-dom");
const { MainApp } = require("../../src/09-useContext/MainApp");

describe("Pruebas en <MainApp/>", () => {
//   test("debe de mostrarse el HomePage", () => {
//     render(
//       <MemoryRouter>
//         <MainApp />
//       </MemoryRouter>
//     );
//     screen.debug();
//     expect(screen.getByText("home Page")).toBeTruthy();
//   });
  test("debe de mostrarse el LoginPage", () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <MainApp />
      </MemoryRouter>
    );
    screen.debug();
    expect(screen.getByText("Login Page")).toBeTruthy();
  });
});
