import React from 'react';
import styled from 'styled-components';

import { Link, useParams } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IPoem } from '../redux/types/poems';
import Header from './Header';
import Footer from './Footer';
import Loader from './Loader';
import { useTranslation } from 'react-i18next';
import Button from './Button';

const StyledPoem = styled.div``;

const StyledPoemWindow = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledPoemContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 50px;
  margin-bottom: 100px;

  div {
    margin-bottom: 50px;
    width: 100%;

    img {
      @media (max-width: 700px) {
        width: 100%;
        height: auto;
      }
    }
  }

  h1 {
    font-weight: 300;
    font-size: 32px;
    line-height: 44px;
    text-align: center;
    color: #000000;
    margin-bottom: 20px;
  }

  p {
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;
    color: #000000;
    white-space: pre-line;
    margin-bottom: 80px;
  }

  a {
    text-decoration: none;
    @media (max-width: 500px) {
      align-self: center;
    }
  }
`;

const Poem: React.FC = () => {
  let params = useParams();
  const { poems, loading } = useTypedSelector((state) => state.poems);
  const [poem, setPoem] = React.useState<IPoem>();

  const { t } = useTranslation();

  React.useEffect(() => {
    setPoem(poems.find((poem) => poem.id === params.id));
  }, [params.id, poems]);

  return (
    <StyledPoem>
      <Loader visible={loading} />
      <Header page={'poems'} />
      <StyledPoemWindow>
        <StyledPoemContent>
          <div>
            {poem?.image.imageUrl !== 'https://stihi.ruundefined' ? (
              <img
                src={poem?.image.imageUrl}
                alt="for poem"
                height={poem?.image.height}
                width={poem?.image.width}
              />
            ) : (
              ''
            )}
          </div>
          <h1>{poem?.name}</h1>
          <p>{poem?.text[0]}</p>
          <Link to="/poems">
            <Button className="all-poems-button">{t('poems.all poems')}</Button>
          </Link>
        </StyledPoemContent>
      </StyledPoemWindow>
      <Footer />
    </StyledPoem>
  );
};

export default Poem;
