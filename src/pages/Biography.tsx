import React from 'react';
import styled from 'styled-components';

import Loader from '../components/Loader';
import Header from '../components/Header';
import { useTranslation } from 'react-i18next';
import ContentSeparator from '../components/ContentSeparator';

import bioImg1 from '../assets/images/biography1.jpg';
import bioImg2 from '../assets/images/biography2.jpg';
import Button from '../components/Button';
import Footer from '../components/Footer';
import { Link as LinkScroll } from 'react-scroll';
import { Link } from 'react-router-dom';

const StyledBiography = styled.div``;

const StyledFirstWindow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100vh;
  width: 100%;
  padding: 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledPromoInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  padding: 0px 200px;
  transition: all 0.3s ease-in-out;

  @media (max-width: 860px) {
    padding: 0px 50px;
  }

  @media (max-width: 560px) {
    margin-top: 40px;
    padding: 0px;
  }

  @media (max-height: 630px) {
    margin-top: 80px !important;
  }

  @media (max-height: 540px) {
    margin-top: 130px !important;
  }

  h2 {
    font-weight: 300;
    font-size: 42px;
    line-height: 57px;
    text-align: center;
    color: #000000;
    margin-bottom: 10px;

    @media (max-width: 560px) {
      font-size: 32px;
      line-height: 42px;
    }
  }

  span {
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: #000000;
  }

  p {
    font-weight: 300;
    font-size: 22px;
    line-height: 30px;
    text-align: center;
    color: #000000;
    margin-top: 50px;

    @media (max-width: 560px) {
      font-size: 18px;
    }

    @media (max-height: 540px) {
      margin-top: 30px !important;
    }
  }
`;

const StyledScrollDown = styled.div`
  position: absolute;
  cursor: pointer;
  bottom: 50px;

  @media (max-width: 560px) {
    bottom: 70px;
  }

  @media (max-height: 540px) {
    display: none;
  }
`;

const StyledActivityWindow = styled.div`
  position: relative;
  width: 100%;
  padding: 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: calc(100vh - 100px);

  .backgroundText {
    font-weight: 300;
    font-size: 70px;
    line-height: 85px;
    text-align: center;
    color: rgba(0, 0, 0, 0.04);
    transform: rotate(-90deg);
    position: absolute;
    right: -40px;
    text-transform: uppercase;

    @media (max-width: 860px) {
      display: none;
    }
  }
`;

const StyledActivity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 200px;
  margin-bottom: 50px;
  transition: all 0.3s ease-in-out;

  @media (max-width: 860px) {
    padding: 0px 50px;
  }

  @media (max-width: 560px) {
    margin-top: 40px;
    padding: 0px;
  }

  p {
    font-weight: 300;
    font-size: 22px;
    line-height: 30px;
    text-align: center;
    color: #000000;
    margin-top: 50px;

    @media (max-width: 560px) {
      font-size: 18px;
    }
  }
`;

const StyledExpereinceWindow = styled.div`
  position: relative;
  width: 100%;
  padding: 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  .backgroundText {
    font-weight: 300;
    font-size: 70px;
    line-height: 85px;
    text-align: center;
    color: rgba(0, 0, 0, 0.04);
    transform: rotate(-90deg);
    position: absolute;
    left: -40px;
    text-transform: uppercase;

    @media (max-width: 860px) {
      display: none;
    }
  }
`;

const StyledExpereince = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 200px;
  margin-bottom: 50px;
  margin-top: 80px;
  transition: all 0.3s ease-in-out;

  @media (max-width: 860px) {
    padding: 0px 50px;
  }

  @media (max-width: 560px) {
    margin-top: 50px;
    padding: 0px;
  }

  p {
    font-weight: 300;
    font-size: 22px;
    line-height: 30px;
    text-align: center;
    color: #000000;
    margin-top: 50px;

    @media (max-width: 560px) {
      font-size: 18px;
    }
  }
`;

const StyledImgExpereinceWindow = styled.div`
  position: relative;
  width: 100%;
  padding: 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImgExpereince = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 50px;
  transition: all 0.3s ease-in-out;

  @media (max-width: 680px) {
    flex-direction: column;
    align-items: center;
    margin-top: 0px;
  }

  img {
    width: 282px;
    height: 423px;
    margin-right: 80px;

    @media (max-width: 680px) {
      margin-right: 0;
      margin-bottom: 40px;
    }
  }

  p {
    width: 45%;
    font-weight: 300;
    font-size: 22px;
    line-height: 30px;
    text-align: left;
    color: #000000;

    @media (max-width: 560px) {
      font-size: 18px;
    }

    @media (max-width: 680px) {
      text-align: center;
      width: 100%;
    }
  }
`;

const StyledScienceWindow = styled.div`
  position: relative;
  width: 100%;
  padding: 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  .backgroundText {
    font-weight: 300;
    font-size: 70px;
    line-height: 85px;
    text-align: center;
    color: rgba(0, 0, 0, 0.04);
    transform: rotate(-90deg);
    position: absolute;
    right: -20px;
    text-transform: uppercase;

    @media (max-width: 860px) {
      display: none;
    }
  }
`;

const StyledScience = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 200px;
  margin-bottom: 50px;
  margin-top: 120px;
  transition: all 0.3s ease-in-out;

  @media (max-width: 860px) {
    padding: 0px 50px;
  }

  @media (max-width: 560px) {
    margin-top: 80px;
    padding: 0px;
  }

  p {
    font-weight: 300;
    font-size: 22px;
    line-height: 30px;
    text-align: center;
    color: #000000;
    margin-top: 50px;

    @media (max-width: 560px) {
      font-size: 18px;
    }
  }
`;

const StyledImgScienceWindow = styled.div`
  position: relative;
  width: 100%;
  padding: 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 120px;

  @media (max-width: 560px) {
    padding-bottom: 80px;
  }
`;

const StyledImgScience = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  justify-content: center;
  margin-top: 50px;
  transition: all 0.3s ease-in-out;

  @media (max-width: 680px) {
    flex-direction: column;
    align-items: center;
    margin-top: 0px;
  }

  img {
    width: 306px;
    height: 205px;
    margin-left: 80px;

    @media (max-width: 680px) {
      margin-left: 0;
      margin-bottom: 40px;
    }
  }

  p {
    width: 45%;
    font-weight: 300;
    font-size: 22px;
    line-height: 30px;
    text-align: left;
    color: #000000;

    @media (max-width: 560px) {
      font-size: 18px;
    }

    @media (max-width: 680px) {
      text-align: center;
      width: 100%;
    }
  }
`;

const StyledRewardsWindow = styled.div`
  position: relative;
  width: 100%;
  padding: 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

const StyledRewards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 80px;

  @media (max-width: 560px) {
    margin-bottom: 60px;
  }

  .first-reward {
    margin-top: 50px;
  }

  p {
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 20px;
    color: #ffffff;

    @media (max-width: 560px) {
      font-size: 18px;
    }
  }

  p::selection {
    color: black;
    background: white;
  }

  div {
    .rotatedSquare {
      background-color: #fff;
    }
  }

  h3 {
    color: #fff;
  }

  h3::selection {
    color: black;
    background: white;
  }
`;

const StyledArtWindow = styled.div`
  position: relative;
  width: 100%;
  padding: 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  .backgroundText {
    font-weight: 300;
    font-size: 70px;
    line-height: 85px;
    text-align: center;
    color: rgba(0, 0, 0, 0.04);
    transform: rotate(-90deg);
    position: absolute;
    right: -20px;
    text-transform: uppercase;

    @media (max-width: 860px) {
      display: none;
    }
  }
`;

const StyledArt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 200px;
  margin-bottom: 80px;
  margin-top: 120px;
  transition: all 0.3s ease-in-out;

  @media (max-width: 860px) {
    padding: 0px 50px;
  }

  @media (max-width: 560px) {
    margin-top: 80px;
    padding: 0px;
  }

  a {
    text-decoration: none;
  }

  .poems-button {
    width: 200px;
  }

  p {
    font-weight: 300;
    font-size: 22px;
    line-height: 30px;
    text-align: center;
    color: #000000;
    margin-top: 50px;
    margin-bottom: 30px;

    @media (max-width: 560px) {
      font-size: 18px;
    }
  }
`;

const Biography = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const { t } = useTranslation();

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <StyledBiography id="promo">
      <Loader visible={isLoading} />
      <Header page={'biography'} />
      <StyledFirstWindow>
        <StyledPromoInfo>
          <h2>{t('fullName')}</h2>
          <span>{t('birthday')}</span>
          <span>{t('city')}</span>
          <p>{t('biography.promo info')}</p>
        </StyledPromoInfo>
        <StyledScrollDown>
          <LinkScroll to="activity" smooth={true} duration={1000} offset={-100}>
            <svg
              width="39"
              height="21"
              viewBox="0 0 39 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <line x1="19.9919" y1="20.0263" x2="0.64645" y2="0.68083" stroke="black" />
              <line x1="19.9919" y1="19.3192" x2="38.6465" y2="0.66463" stroke="black" />
            </svg>
          </LinkScroll>
        </StyledScrollDown>
      </StyledFirstWindow>

      <StyledActivityWindow id="activity">
        <StyledActivity>
          <ContentSeparator text={t('biography.activity')} />
          <p>{t('biography.activity info')}</p>
        </StyledActivity>
        <div className="backgroundText">
          <span>{t('biography.activity')}</span>
        </div>
      </StyledActivityWindow>

      <StyledExpereinceWindow>
        <StyledExpereince>
          <ContentSeparator text={t('biography.international expereince')} />
          <p>{t('biography.expereince info')}</p>
        </StyledExpereince>
        <div className="backgroundText">
          <span>{t('biography.expereince')}</span>
        </div>
      </StyledExpereinceWindow>

      <StyledImgExpereinceWindow>
        <StyledImgExpereince>
          <img src={bioImg1} alt="Volkivskyi" />
          <p>{t('biography.expereince info2')}</p>
        </StyledImgExpereince>
      </StyledImgExpereinceWindow>

      <StyledScienceWindow>
        <StyledScience>
          <ContentSeparator text={t('biography.science achievements')} />
          <p>{t('biography.science info')}</p>
        </StyledScience>
        <div className="backgroundText">
          <span>{t('biography.science')}</span>
        </div>
      </StyledScienceWindow>

      <StyledImgScienceWindow>
        <StyledImgScience>
          <img src={bioImg2} alt="Volkivskyi" />
          <p>{t('biography.science info2')}</p>
        </StyledImgScience>
      </StyledImgScienceWindow>

      <StyledRewardsWindow>
        <StyledRewards>
          <ContentSeparator text={t('biography.rewards')} />
          <p className="first-reward">{t('biography.reward1')}</p>
          <p>{t('biography.reward2')}</p>
          <p>{t('biography.reward3')}</p>
        </StyledRewards>
      </StyledRewardsWindow>

      <StyledArtWindow>
        <StyledArt>
          <ContentSeparator text={t('biography.art')} />
          <p>{t('biography.art info')}</p>
          <Link to="/poems">
            <Button className="poems-button">{t('biography.poems')}</Button>
          </Link>
        </StyledArt>
        <div className="backgroundText">
          <span>{t('biography.poems')}</span>
        </div>
      </StyledArtWindow>

      <Footer />
    </StyledBiography>
  );
};

export default Biography;
