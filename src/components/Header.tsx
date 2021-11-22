import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Link } from 'react-scroll';

import LogoBiography from './logoBiography/Logo';
import LogoPoems from './logoPoems/Logo';
import LogoBlog from './logoBlog/Logo';
import Menu from './Menu';

interface IHeaderProps {
  page: 'biography' | 'poems' | 'blog';
}

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  background-color: white;
  z-index: 100;

  @media (max-width: 560px) {
    position: sticky;
    top: 0;
    -webkit-box-shadow: 0px 0px 5px 1px rgba(41, 41, 41, 0.1);
    -moz-box-shadow: 0px 0px 5px 1px rgba(41, 41, 41, 0.1);
    box-shadow: 0px 0px 5px 1px rgba(41, 41, 41, 0.1);
  }

  .logo {
    cursor: pointer;
    margin-right: 80px;
    margin-top: 20px;

    @media (max-width: 560px) {
      margin-right: 50px;
    }
  }
`;

const StyledBlackTriangle = styled.div`
  width: 0;
  height: 0;
  border-top: 0px solid transparent;
  border-left: 170px solid black;
  border-bottom: 170px solid transparent;
  transition: all 0.3s ease-in-out;

  @media (max-width: 560px) {
    border-left: 110px solid black;
    border-bottom: 110px solid transparent;
  }
`;

const StyledBurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;
  cursor: pointer;

  @media (max-width: 560px) {
    margin-right: 20px;
  }

  svg {
    margin-bottom: 6px;
  }

  span {
    text-transform: uppercase;
    color: ${(props) => props.theme.darkText};
  }
`;

const Header: React.FC<IHeaderProps> = ({ page }) => {
  const [loadingMenuStatus, setLoadingMenuStatus] = React.useState<
    'hidden' | 'loading' | 'visible'
  >('hidden');
  const { t } = useTranslation();

  const handleOpenMenu = () => {
    document.body.style.overflow = 'hidden';
    setLoadingMenuStatus('loading');
    setTimeout(() => setLoadingMenuStatus('visible'), 100);
  };

  const handleCloseMenu = () => {
    setLoadingMenuStatus('loading');
    setTimeout(() => {
      setLoadingMenuStatus('hidden');
      document.body.style.overflow = 'auto';
    }, 400);
  };

  const renderLogo = (page: string) => {
    switch (page) {
      case 'biography':
        return <LogoBiography />;
      case 'poems':
        return <LogoPoems />;
      case 'blog':
        return <LogoBlog />;
    }
  };

  return (
    <StyledHeader>
      {loadingMenuStatus === 'visible' || loadingMenuStatus === 'loading' ? (
        <Menu loadingStatus={loadingMenuStatus} handleCloseMenu={handleCloseMenu} />
      ) : (
        false
      )}
      <StyledBlackTriangle />

      <div className="logo">
        <Link to="promo" smooth={true} duration={1000}>
          {renderLogo(page)}
        </Link>
      </div>

      <StyledBurgerMenu onClick={() => handleOpenMenu()}>
        <svg
          width="40"
          height="29"
          viewBox="0 0 40 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="0.5" x2="39.5" y2="0.5" stroke="black" strokeLinecap="round" />
          <line x1="0.5" y1="14.5" x2="39.5" y2="14.5" stroke="black" strokeLinecap="round" />
          <line x1="0.5" y1="28.5" x2="39.5" y2="28.5" stroke="black" strokeLinecap="round" />
        </svg>
        <span>{t('burger menu')}</span>
      </StyledBurgerMenu>
    </StyledHeader>
  );
};

export default Header;
