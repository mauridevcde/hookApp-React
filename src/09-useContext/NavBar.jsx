import { Link, NavLink } from "react-router-dom";
export const NavBar = () => {
  return (
    <>
       <nav className="navbar navbar-expand-lg bg-light rounded-3">
        <div className="container-fluid">
         
          <NavLink className={ (isActive) =>  `nav-link ${ isActive ? 'active' : ''}` } to="/">Home</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
            
                <NavLink className={ (isActive) =>  `nav-link ${ isActive ? 'active' : ''}` }  to="/">Home</NavLink>
              </li>
              <li className="nav-item">
             
                <NavLink className={ (isActive) =>  `nav-link ${ isActive ? 'active' : ''}` }  to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">Login</NavLink>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
