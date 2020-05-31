import React from 'react';
import {
  StyledTextList,
  StyledTitleTextList,
  StyledItemTextList,
} from './styles';

interface ITextListProps {
  data: any;
  title: string;
}

const TextList: React.FC<ITextListProps> = ({ data, title }) => {
  const renderData = (data: string[]) => {
    return (
      <StyledItemTextList>
        {data.map((element: string, index: number) => {
          if (data.length === 1) {
            return (
              <li className="listItem" key={index + Math.random()}>
                {element}
              </li>
            );
          }
          return <li key={index + Math.random()}>{element}</li>;
        })}
      </StyledItemTextList>
    );
  };

  return (
    <>
      <StyledTextList>
        <StyledTitleTextList>{title}</StyledTitleTextList>
        {renderData(data)}
      </StyledTextList>
    </>
  );
};

export default TextList;
