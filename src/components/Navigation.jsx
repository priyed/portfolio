import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import { APP_ROUTES } from "./constants";

const Navigation = ({ isHomePage }) => {
  return (
    <>
      {!isHomePage && (
        <header>
          <NavLink to="/" className=" home-link navigation link">
          <FontAwesomeIcon icon={faHome} />
          </NavLink>
          <nav>
            <ul
              className={`navigation ${!isHomePage ? "top-nav" : ""}`}
            >
              {Object.keys(APP_ROUTES).map((route) => {
                return (
                  <li key={route}>
                    <NavLink
                      className="link"
                      to={APP_ROUTES[route]}
                      activeClassName="active"
                    >
                      {route}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>
      )}
    </>
  );
};

export default Navigation;
