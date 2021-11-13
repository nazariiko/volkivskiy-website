import React from 'react';
// import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Loader from '../components/Loader';
import { useTypedSelector } from '../hooks/useTypedSelector';

const StyledPoems = styled.div``;

const StyledListOfPoemsWindow = styled.div`
  width: 100%;
  padding: 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledListOfPoems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;

  a {
    text-decoration: none;
    p {
      font-weight: 300;
      font-size: 26px;
      line-height: 35px;
      text-align: center;
      color: #000000;
      margin-bottom: 20px;
    }
  }
`;

const Poems = () => {
  const { poems, loading } = useTypedSelector((state) => state.poems);
  // const { t } = useTranslation();

  return (
    <StyledPoems>
      <Loader visible={loading} />
      <Header page={'poems'} />
      <StyledListOfPoemsWindow>
        <StyledListOfPoems>
          {poems &&
            poems.map((poem, index) => (
              <Link to={`/poems/${poem.id}`} key={index}>
                <p>{poem.name}</p>
              </Link>
            ))}
        </StyledListOfPoems>
      </StyledListOfPoemsWindow>
    </StyledPoems>
  );
};

export default Poems;
