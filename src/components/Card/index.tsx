import React from 'react';
import Figure from './styles';

interface ICardProps {
  title: string;
  img: string;
}

const Card: React.FC<ICardProps> = ({ title, img }) => {
  return (
    <Figure>
      <img src={img} alt={title} />
      <figcaption>{title}</figcaption>
    </Figure>
  );
};

export default Card;
