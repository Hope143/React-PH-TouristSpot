import React from "react";

const navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark py-0">
      <div className="container">
        <a href="#" className="navbar-brand">
          Ecommerce
        </a>

        <div className="navbar-nav">
          <ul className="nav-item">
            <li className="nav-link">
              <a href="#">
                <i className="bi bi-cart4 text-light fs-3"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
