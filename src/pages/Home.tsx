import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Paragraph from '../components/Paragraph';
import Social from '../components/Social';

import homeImg from '../assets/images/home.jpg';
import Menu from '../components/Menu';
import Loader from '../components/Loader';

const StyledHome = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: ${(props) => props.theme.darkBack};

  @media (max-width: 840px) {
    height: fit-content;
  }
`;

const StyledLeftSide = styled.div`
  position: relative;
  height: 100%;
  background-color: ${(props) => props.theme.darkBack};

  img {
    height: 100%;
    width: calc(100vh / 1.5);

    @media (max-width: 400px) {
      width: 100%;
    }
  }

  @media (max-width: 840px) {
  }
`;

const StyledSocialWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 50px;
  left: 50px;
  width: 200px;
  transition: all 0.3s ease-in-out;

  @media (max-width: 840px) {
    width: 250px;
  }

  @media (max-width: 500px) {
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
`;

const StyledRightSide = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  background-color: ${(props) => props.theme.darkBack};
  transition: all 0.3s ease-in-out;

  @media (max-width: 840px) {
    display: none;
  }
`;

const StyledPromo = styled.div`
  margin-top: 50px;
  margin-left: 50px;
  transition: all 0.3s ease-in-out;

  h2 {
    font-weight: 300;
    font-size: 48px;
    line-height: 68px;
    color: ${(props) => props.theme.whiteText};
    text-transform: uppercase;
  }

  a {
    display: block;
    text-decoration: none;
    color: ${(props) => props.theme.whiteText};
    font-size: 22px;
    line-height: 25px;
    margin-top: 100px;
    transition: all 0.3s ease-in-out;

    @media (max-width: 950px) {
      margin-top: 50px;
    }
  }

  @media (max-width: 950px) {
    margin-top: 200px;
  }

  @media (max-width: 840px) {
    display: none;
  }
`;

const StyledBurgerMenuDesktop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 50px;
  top: 50px;
  cursor: pointer;

  svg {
    margin-bottom: 6px;
  }

  span {
    text-transform: uppercase;
  }

  @media (max-width: 840px) {
    display: none;
  }
`;

const StyledBurgerMenuMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 50px;
  top: 50px;
  cursor: pointer;

  @media (max-width: 450px) {
    right: 20px;
    top: 30px;
  }

  svg {
    margin-bottom: 6px;
  }

  span {
    text-transform: uppercase;
    color: ${(props) => props.theme.darkText};
  }

  @media (min-width: 840px) {
    display: none;
  }
`;

const StyledTriangle = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  bottom: 0;
  right: 0;
  border-top: 600px solid transparent;
  border-right: 600px solid white;
  border-bottom: 0px solid transparent;
  transition: all 0.3s ease-in-out;

  @media (max-width: 950px) {
    border-top: 0px solid transparent;
    border-right: 0px solid white;
    border-bottom: none;
  }

  @media (max-width: 840px) {
    display: none;
  }
`;

const StyledAboutMe = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 50px;
  right: 50px;
  align-items: flex-end;
  color: ${(props) => props.theme.darkText};

  @media (max-width: 950px) {
    color: white;
  }
  @media (max-width: 840px) {
    display: none;
  }
`;

const StyledSignature = styled.div`
  transform: rotate(-45deg);
  position: absolute;
  right: 400px;
  bottom: 200px;

  @media (max-width: 840px) {
    display: none;
  }

  span {
    font-family: 'Mr De Haviland', cursive;
    font-style: normal;
    font-weight: normal;
    font-size: 100px;
    line-height: 132px;
    text-align: center;
    color: #ffffff;
  }
`;

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);
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

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <StyledHome>
      <Loader visible={isLoading} />
      {loadingMenuStatus === 'visible' || loadingMenuStatus === 'loading' ? (
        <Menu loadingStatus={loadingMenuStatus} handleCloseMenu={handleCloseMenu} />
      ) : (
        false
      )}

      <StyledLeftSide>
        <img src={homeImg} alt="Mykola Volkivskiy" />
        <StyledBurgerMenuMobile onClick={() => handleOpenMenu()}>
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
        </StyledBurgerMenuMobile>
        <StyledSocialWrapper>
          <a href="https://www.facebook.com/nickolas.volkovski" target="_blank" rel="noreferrer">
            <Social>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.24 3.52001H11.84C12.0167 3.52001 12.16 3.37665 12.16 3.20001V1.04417C12.16 0.876495 12.0311 0.736975 11.864 0.725135C11.3549 0.688975 10.3603 0.640015 9.64515 0.640015C7.68003 0.640015 6.40003 1.81761 6.40003 3.95777V6.08001H4.16003C3.98339 6.08001 3.84003 6.22337 3.84003 6.40001V8.64001C3.84003 8.81665 3.98339 8.96001 4.16003 8.96001H6.40003V15.04C6.40003 15.2167 6.54339 15.36 6.72003 15.36H8.96003C9.13667 15.36 9.28003 15.2167 9.28003 15.04V8.96001H11.5911C11.7543 8.96001 11.8912 8.83745 11.9091 8.67521L12.1581 6.43521C12.1792 6.24577 12.0307 6.08001 11.84 6.08001H9.28003V4.48001C9.28003 3.94977 9.70979 3.52001 10.24 3.52001Z"
                  fill="white"
                />
              </svg>
            </Social>
          </a>
          <a
            href="https://www.instagram.com/nick_volkovski/?hl=en"
            target="_blank"
            rel="noreferrer">
            <Social>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.11999 0.959991C2.82559 0.959991 0.959991 2.82559 0.959991 5.11999V10.88C0.959991 13.1744 2.82559 15.04 5.11999 15.04H10.88C13.1744 15.04 15.04 13.1744 15.04 10.88V5.11999C15.04 2.82559 13.1744 0.959991 10.88 0.959991H5.11999ZM11.84 3.51999C12.192 3.51999 12.48 3.80799 12.48 4.15999C12.48 4.51199 12.192 4.79999 11.84 4.79999C11.488 4.79999 11.2 4.51199 11.2 4.15999C11.2 3.80799 11.488 3.51999 11.84 3.51999ZM7.99999 4.47999C9.94239 4.47999 11.52 6.05759 11.52 7.99999C11.52 9.94239 9.94239 11.52 7.99999 11.52C6.05759 11.52 4.47999 9.94239 4.47999 7.99999C4.47999 6.05759 6.05759 4.47999 7.99999 4.47999ZM7.99999 5.11999C6.41279 5.11999 5.11999 6.41279 5.11999 7.99999C5.11999 9.58719 6.41279 10.88 7.99999 10.88C9.58719 10.88 10.88 9.58719 10.88 7.99999C10.88 6.41279 9.58719 5.11999 7.99999 5.11999Z"
                  fill="white"
                />
              </svg>
            </Social>
          </a>
          <a href="mailto:n.volkovski@gmail.com" target="_blank" rel="noreferrer">
            <Social>
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.09592 0C0.805365 0.000328737 0.526804 0.115897 0.32135 0.321351C0.115897 0.526804 0.000328737 0.805365 0 1.09592V1.25845L7.172 6.7753C7.42864 6.97636 7.7452 7.08575 8.07123 7.08602C8.39726 7.08629 8.71401 6.97743 8.97099 6.77679L16 1.26009V1.09592C15.9997 0.805365 15.8841 0.526804 15.6786 0.321351C15.4732 0.115897 15.1946 0.000328737 14.9041 0H1.09592ZM0 2.18035V9.82882L4.47272 5.6208L0 2.18035ZM16 2.18884L11.6566 5.59775L16 9.81405V2.18884ZM11.0766 6.05317L9.42106 7.35222C9.03612 7.65324 8.56155 7.81684 8.0729 7.81697C7.58424 7.8171 7.10959 7.65375 6.72449 7.35294L5.05928 6.07208L0.163032 10.6786C0.261074 10.8379 0.398274 10.9695 0.561569 11.0609C0.724864 11.1522 0.908818 11.2002 1.09592 11.2004H14.9041C15.0917 11.2002 15.2762 11.152 15.4399 11.0601C15.6035 10.9683 15.7409 10.836 15.8388 10.6759L11.0766 6.05317Z"
                  fill="white"
                />
              </svg>
            </Social>
          </a>
        </StyledSocialWrapper>
      </StyledLeftSide>
      <StyledRightSide>
        <StyledPromo>
          <h2>{t('name')}</h2>
          <h2>{t('surname')}</h2>
          <Link to="/blog">
            <p>{t('personal blog')}</p>
          </Link>
        </StyledPromo>
        <StyledSignature>
          <span>Nich</span>
        </StyledSignature>
        <StyledBurgerMenuDesktop onClick={() => handleOpenMenu()}>
          <svg
            width="40"
            height="29"
            viewBox="0 0 40 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <line x1="0.5" y1="0.5" x2="39.5" y2="0.5" stroke="white" strokeLinecap="round" />
            <line x1="0.5" y1="14.5" x2="39.5" y2="14.5" stroke="white" strokeLinecap="round" />
            <line x1="0.5" y1="28.5" x2="39.5" y2="28.5" stroke="white" strokeLinecap="round" />
          </svg>
          <span>{t('burger menu')}</span>
        </StyledBurgerMenuDesktop>
        <StyledTriangle />
        <StyledAboutMe>
          <Paragraph align={'right'} width={170} mb={20}>
            {t('about info.part1')}
          </Paragraph>
          <Paragraph align={'right'} width={280} mb={20}>
            {t('about info.part2')}
          </Paragraph>
          <Paragraph align={'right'} width={320}>
            {t('about info.part3')}
          </Paragraph>
        </StyledAboutMe>
      </StyledRightSide>
    </StyledHome>
  );
};

export default Home;
