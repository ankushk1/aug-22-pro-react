import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="my-5">
      <div className="d-flex justify-content-evenly">
        <div>
          <NavLink
            // className={({ isActive }) =>
            //   isActive
            //     ? "text-danger bg bg-dark px-3 py-1 text-decoration-none"
            //     : "text-dark text-decoration-none"
            // }
            style={({ isActive }) =>
              isActive
                ? {
                    color: "red",
                    backgroundColor: "#2e2c2c",
                    padding: "0.5rem 1.5rem",
                    textDecoration: "none"
                  }
                : {
                    color: "black",
                    textDecoration: "none"
                  }
            }
            to="/"
          >
             Home
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-danger bg bg-dark px-3 py-1 text-decoration-none"
                : "text-dark text-decoration-none"
            }
            to="/about"
          >
            About
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-danger bg bg-dark px-3 py-1 text-decoration-none"
                : "text-dark text-decoration-none"
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
