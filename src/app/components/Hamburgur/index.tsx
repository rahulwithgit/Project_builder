import * as React from 'react';
import styled from 'styled-components/macro';
import { useState } from 'react';

interface Props {}

export function Hamburgur(props: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <Container isOpen={isOpen}>
      <Logo onClick={toggleMenu} src="/path/to/your-logo.png" alt="Logo" />
      <MenuContent isOpen={isOpen}>
        <MenuItem>
          <Icon src="/path/to/icon1.png" alt="icon1" />
          {isOpen && <span>Menu Item 1</span>}
        </MenuItem>
        <MenuItem>
          <Icon src="/path/to/icon2.png" alt="icon2" />
          {isOpen && <span>Menu Item 2</span>}
        </MenuItem>
        <MenuItem>
          <Icon src="/path/to/icon3.png" alt="icon3" />
          {isOpen && <span>Menu Item 3</span>}
        </MenuItem>
      </MenuContent>
    </Container>
  );
}

// Styled components
const Container = styled.div<{ isOpen: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  width: ${(props) => (props.isOpen ? '250px' : '60px')}; /* Expands to 250px, collapses to 60px */
  height: 100vh;
  background-color: ${(props) => (props.isOpen ? '#f8f9fa' : '#ddd')}; /* Optional color change */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: width 0.3s ease-in-out; /* Smooth width transition */
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin: 10px;
`;

const MenuContent = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 10px;
  background-color: #fff;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  margin: 0;
  // border-bottom: 1px solid #ddd;
  cursor: pointer; /* Make the items clickable */
  span {
    margin-left: 10px; /* Add spacing between icon and text */
  }
  &:hover {
    background-color: #f0f0f0; /* Hover effect */
  }
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
