import React from 'react';
import {
  StyledTextList,
  StyledTitleTextList,
  StyledItemTextList,
} from './styles';

type TextListProps = {
  data: string[];
  title: string;
}

export const TextList: React.FC<TextListProps> = ({ data, title }) => {
  const renderData = (item: string[]) => (
    <StyledItemTextList>
      {item.map((element) => {
        if (data.length === 1) {
          return (
            <li className="listItem" key={element + Math.random()}>
              {element}
            </li>
          );
        }
        return <li key={element + Math.random()}>{element}</li>;
      })}
    </StyledItemTextList>
  );

  return (
    <>
      <StyledTextList>
        <StyledTitleTextList>{title}</StyledTitleTextList>
        {renderData(data)}
      </StyledTextList>
    </>
  );
};
