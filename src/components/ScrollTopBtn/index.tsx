import React, { useEffect, useState } from 'react';

import Arrow from './triangle.svg';
import StyledScrollTop from './styles';

export const ScrollTopBtn: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    document.addEventListener('scroll', toggleVisibility);

    return () => {
      document.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {visible && (
        <StyledScrollTop onClick={scrollToTop}>
          <img src={Arrow} alt="arrow-up" />
        </StyledScrollTop>
      )}
    </>
  );
};
