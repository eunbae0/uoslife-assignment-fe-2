// import Category from '../components/Category';

import { useState, useEffect } from 'react';
import { GetTodoResponseType, getTodo } from '../api/todo';
import Todo from '../components/todo/Todo';
import TodoInput from '../components/todo/TodoInput';

const Login = () => {
  const [todoList, setTodoList] = useState<GetTodoResponseType>();
  const getTodoAPI = async () => {
    const todo = await getTodo();
    setTodoList(todo);
  };
  const [updateTodoStatus, setUpdateTodoStatus] = useState(false);

  useEffect(() => {
    getTodoAPI();
  }, [updateTodoStatus]);

  return (
    <>
      <TodoInput setUpdateTodoStatus={setUpdateTodoStatus} />
      {!!todoList &&
        todoList.data
          .sort((a, b) => a.id - b.id)
          .map(todo => (
            <Todo
              key={todo.id}
              id={todo.id}
              todo={todo.attributes.todo}
              setUpdateTodoStatus={setUpdateTodoStatus}
            />
          ))}
      {/* <button type="button">logout</button> */}
    </>
  );
};

export default Login;
