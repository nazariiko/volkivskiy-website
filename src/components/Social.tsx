import React from 'react';
import styled from 'styled-components';

interface SocialProps {
  children: React.ReactNode;
}

const StyledSocial = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid #fff;
  transform: rotate(45deg);
  background-color: ${(props) => props.theme.darkBack};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  @media (max-width: 840px) {
    width: 50px;
    height: 50px;
  }

  .hoverAnimation {
    position: absolute;
    top: 17px;
    right: 16px;
    width: 5px;
    height: 5px;
    z-index: -1;
    transition: all 0.4s ease-out;
  }

  svg {
    transform: rotate(-45deg);
  }

  @media (hover: hover) {
    &:hover {
      svg {
        path {
          fill: ${(props) => props.theme.darkBack};
        }
      }
    }

    &:hover .hoverAnimation {
      background: white;
      transform: scale(7);
    }
  }
`;

const Social: React.FC<SocialProps> = ({ children }) => {
  return (
    <StyledSocial>
      {children}
      <div className="hoverAnimation"></div>
    </StyledSocial>
  );
};

export default Social;
