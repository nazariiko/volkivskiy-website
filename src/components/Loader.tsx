import React from 'react';
import styled from 'styled-components';

interface ILoaderProps {
  visible: boolean;
}

interface IStyledLoaderProps {
  visible: boolean;
}

const StyledPreloader = styled.div<IStyledLoaderProps>`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;
  background: white;
`;

const Loader: React.FC<ILoaderProps> = ({ visible }) => {
  return (
    <StyledPreloader visible={visible}>
      <div className="loader">
        <span>l</span>
        <span>o</span>
        <span>a</span>
        <span>d</span>
        <span>i</span>
        <span>n</span>
        <span>g</span>
      </div>
    </StyledPreloader>
  );
};

export default Loader;
