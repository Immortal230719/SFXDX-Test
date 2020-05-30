import React from 'react';

import StyledImageList from './styles';
interface IImageListProps {
  images: string[];
}

const ImageList: React.FC<IImageListProps> = ({ images }) => {
  return (
    <StyledImageList>
      {images.map((image: string, index: number) => {
        return (
          <li key={index + Math.random()}>
            <img src={image} alt="pokemon" />
          </li>
        );
      })}
    </StyledImageList>
  );
};

export default ImageList;
