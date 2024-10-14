/**
 *
 * Hamburgur
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import  { useState } from 'react';
import './hamburgur.css';


interface Props {}

export function Hamburgur(props: Props) {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu-container">
      <button className="hamburger-icon" onClick={toggleMenu}>
        ☰ {/* Hamburger icon */}
      </button>

      {/* When menu is open, show full menu; when closed, show only icons */}
      <div className={`menu ${isOpen ? 'open' : 'closed'}`}>
        {isOpen ? (
          <ul className="menu-items">
            <li>
              <i className="icon">🏠</i> Home
            </li>
            <li>
              <i className="icon">📁</i> Files
            </li>
            <li>
              <i className="icon">⚙️</i> Settings
            </li>
          </ul>
        ) : (
          <div className="icons-only">
            <i className="icon">🏠</i>
            <i className="icon">📁</i>
            <i className="icon">⚙️</i>
          </div>
        )}
      </div>
    </div>
  );
}

const Div = styled.div``;
