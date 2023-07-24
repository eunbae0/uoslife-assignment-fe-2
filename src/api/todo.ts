import { TODO_API } from '.';

type TodoType = {
  id: number;
  attributes: {
    todo: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

type TodoRequestType = {
  data: {
    todo: string;
  };
};

type TodoResponseType = {
  data: TodoType;
  meta: {};
};

export type GetTodoResponseType = {
  data: TodoType[];
  meta: {};
};

export const getTodo = (): Promise<GetTodoResponseType> => {
  return TODO_API.get('').json();
};

export const createTodo = (
  todo: TodoRequestType,
): Promise<TodoResponseType> => {
  return TODO_API.post('', { json: todo }).json();
};

export const editTodo = (
  id: number,
  todo: TodoRequestType,
): Promise<TodoResponseType> => {
  return TODO_API.put(`${id}`, { json: todo }).json();
};

export const deleteTodo = (id: number): Promise<TodoResponseType> => {
  return TODO_API.delete(`${id}`).json();
};
