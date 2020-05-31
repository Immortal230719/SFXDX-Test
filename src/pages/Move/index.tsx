import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';

import { getSingleMove } from 'sagas';

import {
  Layout,
  Title,
  Container,
  ImageList,
  TextList,
  Button,
  UnorderedList,
  Subtitle,
} from 'components';

const Move: React.FC = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getSingleMove(id));
  }, [dispatch]);

  return (
    <Layout>
      <Title>title</Title>
      <Container>
        <Button onClick={history.goBack} text="back" />
      </Container>
    </Layout>
  );
};

export default Move;
