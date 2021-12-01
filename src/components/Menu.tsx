import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Button from './Button';

import ChangeLanguage from './ChangeLanguage';

interface IMenuProps {
  loadingStatus: string;
  handleCloseMenu: () => void;
}

interface IStyledMenuProps {
  loadingStatus: string;
}

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledMenu = styled.div<IStyledMenuProps>`
  position: absolute;
  top: 0;
  right: ${(props) => (props.loadingStatus === 'loading' ? '-400px' : '0px')};
  bottom: 0;
  width: 400px;
  height: 100vh;
  background-color: ${(props) => props.theme.whiteBack};
  transition: all 0.3s ease-in-out;

  @media (max-width: 560px) {
    width: 100%;
    right: ${(props) => (props.loadingStatus === 'loading' ? 'calc(-100%)' : '0px')};
  }

  .wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 50px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .menu-write-button {
      margin-bottom: 60px;
    }
  }
`;

const StyledTopNavigation = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  svg {
    cursor: pointer;
  }
`;

const StyledMenuNavigation = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
  }

  li {
    display: block;
    margin-bottom: 20px;
    font-weight: 300;
    font-size: 22px;
    line-height: 25px;
    text-align: center;
    cursor: pointer;
    color: ${(props) => props.theme.darkText};
    transition: all 0.3s ease-in-out;

    @media (max-width: 500px) {
      font-size: 26px;
      margin-bottom: 30px;
    }
  }

  li.active {
    border-bottom: 1px solid black;
  }
`;

const Menu: React.FC<IMenuProps> = ({ loadingStatus, handleCloseMenu }) => {
  const { t, i18n } = useTranslation();
  const { currentPage } = useTypedSelector((state) => state.page);

  const handleChangeLanguage = (prevLang: string) => {
    prevLang === 'ua' ? i18n.changeLanguage('en') : i18n.changeLanguage('ua');
  };

  const handleWriteMe = () => {
    window.location.assign('mailto:n.volkovski@gmail.com');
  };

  return (
    <StyledOverlay>
      <StyledMenu loadingStatus={loadingStatus}>
        <div className="wrapper">
          <StyledTopNavigation>
            <svg
              onClick={handleCloseMenu}
              width="22"
              height="39"
              viewBox="0 0 22 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <line x1="1.30099" y1="19.9919" x2="20.6464" y2="0.646451" stroke="black" />
              <line x1="2.00809" y1="19.9919" x2="20.6626" y2="38.6465" stroke="black" />
            </svg>
            <ChangeLanguage handleChangeLanguage={handleChangeLanguage} />
          </StyledTopNavigation>
          <StyledMenuNavigation>
            <Link to="/" onClick={handleCloseMenu}>
              <li slot="home" className={currentPage === '/' ? 'active' : ''}>
                {t('navigation items.item1')}
              </li>
            </Link>

            <Link to="/blog" onClick={handleCloseMenu}>
              <li slot="blog" className={currentPage === '/blog' ? 'active' : ''}>
                {t('navigation items.item2')}
              </li>
            </Link>

            <Link to="/poems" onClick={handleCloseMenu}>
              <li slot="poems" className={currentPage === '/poems' ? 'active' : ''}>
                {t('navigation items.item3')}
              </li>
            </Link>

            <Link to="/biography" onClick={handleCloseMenu}>
              <li slot="biography" className={currentPage === '/biography' ? 'active' : ''}>
                {t('navigation items.item4')}
              </li>
            </Link>
          </StyledMenuNavigation>
          <Button onClick={handleWriteMe} className="menu-write-button">
            {t('write me')}
          </Button>
        </div>
      </StyledMenu>
    </StyledOverlay>
  );
};

export default Menu;
