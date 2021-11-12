import React from 'react';
import styled from 'styled-components';

interface ParagraphProps {
  children: string | React.ReactNode;
  width?: number;
  mb?: number;
  align?: 'left' | 'center' | 'right';
  color?: 'white' | 'black';
}

interface StyledParagraphProps {
  mb?: number;
  width?: number;
  align: 'left' | 'center' | 'right';
  color?: 'white' | 'black';
}

const StyledParagraph = styled.p<StyledParagraphProps>`
  color: ${(props) => (props.color === 'black' ? props.theme.darkText : 'inherit')};
  margin-bottom: ${(props) => props.mb}px;
  width: ${(props) => props.width}px;
  text-align: ${(props) => props.align};
`;

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  width,
  mb = 0,
  align = 'left',
  color,
}) => {
  return (
    <StyledParagraph width={width} mb={mb} align={align} color={color}>
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
