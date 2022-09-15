import { FC, useState } from "react";

interface TodoListProps {
  todoList: Array<string>;
}

const TodoList: FC<TodoListProps> = ({ todoList }) => {
  return (
    <div>
      <ul>
        {todoList.map((todo: string) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
