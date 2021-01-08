import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { debounce } from '../utilities/helpers';
import "./Navigation.css";

const Navigation = () => {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    //find current scroll position
    const currentScrollPos = window.pageYOffset;

    // set state based on location info
    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    
      <header  style={{ top: visible ? '0': '-60px' }}>
      <a className="home-link" href="#home">
          <FontAwesomeIcon icon={faHome} />
          </a>
        <nav>
          <ul>
            <li>
            <a className="link" href="#about" activeClassName="active">
                About
              </a>
            </li>
            <li>
            <a  className="link" href="#projects" activeClassName="active">
                Projects
              </a>
            </li>
            <li>
            <a  className="link" href="#contact" activeClassName="active">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
  );
};

export default Navigation;
