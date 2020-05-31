import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Button } from 'components';

// interface IMoveProps extends RouteComponentProps<any> {}

const Move: React.FC = () => {
  return (
    <div>
      <Button text="back" />
    </div>
  );
};

export default Move;
