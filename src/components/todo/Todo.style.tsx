import { css } from 'styled-components';

export const TodoStyle = {
  TodoWrapper: css`
    width: 100%;
    height: 54px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    padding-left: 24px;
    border-radius: 24px;
    margin: 6px 0;
  `,
  TodoInput: css`
    all: unset;
    color: gray;
    width: 70%;
  `,
  TodoButton: css`
    all: unset;
    cursor: pointer;
    padding: 0 20px;
  `,
};

export default TodoStyle;
