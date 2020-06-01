import React, { useEffect, useState } from 'react';

import Arrow from './triangle.svg';
import StyledScrollTop from './styles';

const ScrollTop: React.FC = () => {
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
  }, [toggleVisibility]);

  return (
    <>
      {visible && (
        <StyledScrollTop onClick={scrollToTop}>
          <img tabIndex={0} src={Arrow} alt="arrow-up" />
        </StyledScrollTop>
      )}
    </>
  );
};

export default ScrollTop;
