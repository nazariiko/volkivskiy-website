import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Home from './pages/Home';
import Biography from './pages/Biography';
import { useDispatch } from 'react-redux';
import { setPage } from './redux/action-creators/page';
import { Page } from './redux/types/page';

const StyledApp = styled.div`
  width: 100%;
`;

const App: React.FC = () => {
  let location = useLocation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setPage(location.pathname as Page));
  }, [location, dispatch]);

  return (
    <StyledApp>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/biography" element={<Biography />}></Route>
      </Routes>
    </StyledApp>
  );
};

export default App;
