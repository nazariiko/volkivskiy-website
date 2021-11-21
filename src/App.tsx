import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Home from './pages/Home';
import Biography from './pages/Biography';
import { useDispatch } from 'react-redux';
import { setPage } from './redux/action-creators/page';
import { Page } from './redux/types/page';
import Poems from './pages/Poems';
import Poem from './components/Poem';
import ScrollToTop from './components/ScrollToTop';
import { PoemsActionTypes } from './redux/types/poems';
import { poems } from './data/poems';
import Blog from './pages/Blog';

const StyledApp = styled.div`
  width: 100%;
`;

const App: React.FC = () => {
  let location = useLocation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({ type: PoemsActionTypes.FETCH_POEMS_SUCCESS, payload: poems });
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(setPage(location.pathname as Page));
  }, [location, dispatch]);

  return (
    <StyledApp>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/poems" element={<Poems />} />
        <Route path="/poems/:id" element={<Poem />} />
      </Routes>
    </StyledApp>
  );
};

export default App;
