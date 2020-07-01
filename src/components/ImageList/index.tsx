import React from 'react';

import StyledImageList from './styles';

type ImageListProps = {
  images: string[];
}

export const ImageList: React.FC<ImageListProps> = ({ images }) => (
  <StyledImageList>
    {images.map((image: string) => (
      <li key={image}>
        <img src={image} alt="pokemon" />
      </li>
    ))}
  </StyledImageList>
);
