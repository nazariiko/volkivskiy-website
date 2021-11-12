import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: string | React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const StyledButton = styled.button`
  display: block;
  max-width: 200px;
  text-transform: uppercase;
  border: 1px solid black;
  padding: 20px 50px;
  background-color: white;
  cursor: pointer;
`;

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <StyledButton className={className} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default React.memo(Button);
