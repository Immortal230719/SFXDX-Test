import React from 'react';
import Figure from './styles';

type CardProps = {
  title: string;
  img: string;
}

export const Card: React.FC<CardProps> = ({ title, img }) => (
  <Figure>
    <img src={img} alt={title} />
    <figcaption>{title}</figcaption>
  </Figure>
);
