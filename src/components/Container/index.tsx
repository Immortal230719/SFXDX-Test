import React, { FC } from 'react';
import Section from './styles';

const Container: FC = ({ children }) => {
  return <Section>{children}</Section>;
};

export default Container;
