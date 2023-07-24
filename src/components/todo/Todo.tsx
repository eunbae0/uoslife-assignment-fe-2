import { useState } from 'react';
import { styled } from 'styled-components';
import { deleteTodo, editTodo } from '../../api/todo';

import TodoStyle from './Todo.style';

type Props = {
  id: number;
  todo: string;
  setUpdateTodoStatus: React.Dispatch<React.SetStateAction<boolean>>;
};

const Todo = ({ id, todo, setUpdateTodoStatus }: Props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editedTodoText, setEditedTodoText] = useState<string>(todo);

  const onSubmitEdit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await editTodo(id, { data: { todo: editedTodoText } });
      setIsEdit(prev => !prev);
      setUpdateTodoStatus(prev => !prev);
    } catch (error) {
      console.log(error);
    }
  };
  const handleEditTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTodoText(e.target.value);
  };
  const handleEditButton = () => {
    setIsEdit(prev => !prev);
  };
  const handleDeleteTodo = async (id: number) => {
    try {
      await deleteTodo(id);
      setUpdateTodoStatus(prev => !prev);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <S.TodoWrapper>
      {isEdit ? (
        <S.EditForm onSubmit={onSubmitEdit}>
          <S.EditInput value={editedTodoText} onChange={handleEditTodo} />
        </S.EditForm>
      ) : (
        <S.TodoText>{todo}</S.TodoText>
      )}
      <S.ButtonWrapper>
        {!isEdit && (
          <S.TodoButton onClick={handleEditButton}>수정</S.TodoButton>
        )}
        <S.TodoButton onClick={() => handleDeleteTodo(id)}>삭제</S.TodoButton>
      </S.ButtonWrapper>
    </S.TodoWrapper>
  );
};

export default Todo;

const S = {
  TodoWrapper: styled.div`
    ${TodoStyle.TodoWrapper}
  `,
  TodoText: styled.span``,
  EditForm: styled.form`
    width: 70%;
  `,
  EditInput: styled.input`
    ${TodoStyle.TodoInput}
  `,
  ButtonWrapper: styled.div`
    display: flex;
  `,
  TodoButton: styled.button`
    ${TodoStyle.TodoButton}
  `,
};
