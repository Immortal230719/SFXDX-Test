import React, { useEffect, useState } from 'react';

import StyledImageList from './styles';
import { useDispatch } from 'react-redux';
import { putToggleBackDrop } from 'sagas';
interface IImageListProps {
  images: string[];
}

const checkArray: any = [];

const ImageList: React.FC<IImageListProps> = ({ images }) => {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  const onImageLoad = () => {
    checkArray.push(true);
    if (images.length === checkArray.length) {
      setLoaded(true);
      checkArray.splice(0, checkArray.length);
    }
  };

  useEffect(() => {
    if (loaded) {
      dispatch(putToggleBackDrop(false));
    }
  }, [dispatch, loaded]);

  return (
    <StyledImageList>
      {images.map((image: string, index: number) => {
        return (
          <li key={index + Math.random()}>
            <img src={image} alt="pokemon" onLoad={onImageLoad} />
          </li>
        );
      })}
    </StyledImageList>
  );
};

export default ImageList;
