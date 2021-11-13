import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Home from './pages/Home';
import Biography from './pages/Biography';
import { useDispatch } from 'react-redux';
import { setPage } from './redux/action-creators/page';
import { Page } from './redux/types/page';
import Poems from './pages/Poems';
import { fetchPoems } from './redux/action-creators/poems';
import Poem from './components/Poem';

const StyledApp = styled.div`
  width: 100%;
`;

const App: React.FC = () => {
  let location = useLocation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPoems());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(setPage(location.pathname as Page));
  }, [location, dispatch]);

  return (
    <StyledApp>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="/poems" element={<Poems />} />
        <Route path="/poems/:id" element={<Poem />} />
      </Routes>
    </StyledApp>
  );
};

export default App;
