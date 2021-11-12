import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

interface IChangeLanguageProps {
  handleChangeLanguage: (lang: string) => void;
}

const StyledChanging = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid #000;
  transform: rotate(45deg);
  background-color: ${(props) => props.theme.whiteBack};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  span {
    transform: rotate(-45deg);
    color: ${(props) => props.theme.darkText};
    transition: all 0.3s ease-in-out;
    text-transform: uppercase;
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

  @media (hover: hover) {
    &:hover .hoverAnimation {
      background: black;
      transform: scale(7);
    }

    &:hover {
      span {
        color: ${(props) => props.theme.whiteText};
      }
    }
  }
`;

const ChangeLanguage: React.FC<IChangeLanguageProps> = ({ handleChangeLanguage }) => {
  const { i18n } = useTranslation();

  return (
    <StyledChanging onClick={() => handleChangeLanguage(i18n.language)}>
      <span>{i18n.language === 'ua' ? 'en' : 'ua'}</span>
      <div className="hoverAnimation"></div>
    </StyledChanging>
  );
};

export default ChangeLanguage;
