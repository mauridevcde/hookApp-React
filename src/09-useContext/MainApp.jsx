import { Navigate, Route, Routes, Link } from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { NavBar } from "./NavBar";

export const MainApp = () => {
  return (
    <>
      <h1>Main App</h1>

      <NavBar />
      <hr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* <Route path="*" element={<h1>404 Not Found</h1>} /> */}
        <Route path="*" element={<Navigate to={"/about"} />} />
      </Routes>
    </>
  );
};
