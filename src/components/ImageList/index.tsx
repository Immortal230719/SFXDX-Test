import React from 'react';

import StyledImageList from './styles';

interface IImageListProps {
  images: string[];
}

const ImageList: React.FC<IImageListProps> = ({ images }) => {
  return (
    <StyledImageList>
      {images.map((image: string) => {
        return (
          <li key={image}>
            <img src={image} alt="pokemon" />
          </li>
        );
      })}
    </StyledImageList>
  );
};

export default ImageList;
