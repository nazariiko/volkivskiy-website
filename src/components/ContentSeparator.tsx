import React from 'react';
import styled from 'styled-components';

interface IContentSeparatorProps {
  text: string;
}

const StyledContentSeparator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0px;

  .rotatedSquare {
    width: 20px;
    height: 20px;
    background: #000000;
    transform: rotate(-45deg);
    margin-bottom: 15px;
  }

  h3 {
    font-size: 20px;
    line-height: 27px;
    text-align: center;
    text-decoration-line: underline;
    text-transform: uppercase;
    color: #000000;
  }
`;

const ContentSeparator: React.FC<IContentSeparatorProps> = ({ text }) => {
  return (
    <StyledContentSeparator>
      <div className="rotatedSquare"></div>
      <h3>{text}</h3>
    </StyledContentSeparator>
  );
};

export default ContentSeparator;
