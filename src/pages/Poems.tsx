import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footer';
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
  margin-bottom: 80px;

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

    p.visited {
      color: #ff8652;
    }
  }
`;

const Poems = () => {
  const { poems, loading } = useTypedSelector((state) => state.poems);

  const setToLocalStorage = (id: string) => {
    if (localStorage.getItem('visited_poems') === null) {
      localStorage.setItem('visited_poems', JSON.stringify([id]));
    } else {
      let visitedPoemsStringified = localStorage.getItem('visited_poems');
      let visitedPoemsParsed = JSON.parse(visitedPoemsStringified as string);
      if (!visitedPoemsParsed.includes(id)) {
        visitedPoemsParsed.push(id);
        localStorage.setItem('visited_poems', JSON.stringify(visitedPoemsParsed));
      }
    }
  };

  const checkIsInLocalStorage = (id: string) => {
    let visitedPoemsStringified = localStorage.getItem('visited_poems');
    let visitedPoemsParsed = JSON.parse(visitedPoemsStringified as string);
    return visitedPoemsParsed?.includes(id);
  };

  return (
    <StyledPoems>
      <Loader visible={loading} />
      <Header page={'poems'} />
      <StyledListOfPoemsWindow>
        <StyledListOfPoems>
          {poems &&
            poems.map((poem, index) => (
              <Link to={`/poems/${poem.id}`} key={index}>
                <p
                  className={`${checkIsInLocalStorage(poem.id) ? 'visited' : ''}`}
                  onClick={() => setToLocalStorage(poem.id)}>
                  {poem.name}
                </p>
              </Link>
            ))}
        </StyledListOfPoems>
      </StyledListOfPoemsWindow>
      <Footer />
    </StyledPoems>
  );
};

export default Poems;
