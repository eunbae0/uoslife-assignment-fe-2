import { useRef } from 'react';
import styled from 'styled-components';
import { createTodo } from '../../api/todo';
import TodoStyle from './Todo.style';

const TodoInput = ({
  setUpdateTodoStatus,
}: {
  setUpdateTodoStatus?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const todoRef = useRef<HTMLInputElement>(null);

  const handleTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todo = todoRef.current?.value ?? '';
    try {
      await createTodo({ data: { todo } });
      todoRef.current!.value = '';
      setUpdateTodoStatus(prev => !prev);
    } catch (error) {
      console.log(error);
      alert('에러');
    }
  };

  return (
    <S.TodoForm onSubmit={handleTodo}>
      <S.TodoInput placeholder="Add a Task" ref={todoRef} />
      <S.TodoSubmitButton>제출</S.TodoSubmitButton>
    </S.TodoForm>
  );
};

export default TodoInput;

const S = {
  TodoForm: styled.form`
    ${TodoStyle.TodoWrapper}
  `,
  TodoInput: styled.input`
    ${TodoStyle.TodoInput}
  `,
  TodoSubmitButton: styled.button`
    ${TodoStyle.TodoButton}
  `,
};
