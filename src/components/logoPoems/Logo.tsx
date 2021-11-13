import React from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import LogoDesktop from './LogoDesktop';
import LogoMobile from './LogoMobile';

const LogoBiography = () => {
  const { width } = useWindowSize();

  if (width && width > 560) {
    return <LogoDesktop />;
  } else {
    return <LogoMobile />;
  }
};

export default LogoBiography;
