import styled, { css } from 'styled-components';

const InputWrap = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    width: 50%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;

    span {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 30px;
    }

    input {
      background: inherit;
      padding: 10px;
      width: 100%;
      height: 40px;
      font-size: 20px;
      border-radius: 10px;
      border: 2px solid #fcfcfc;
      color: ${theme.colors.white};

      &:focus {
        border: none;
      }
    }
  `}
`;

export default InputWrap;
