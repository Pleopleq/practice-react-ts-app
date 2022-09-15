import React, { FC, useState } from "react";

interface TodoAddBarProps {
  label: string;
  placeholder: string;
  setTodoList: Function;
}

const TodoAddBar: FC<TodoAddBarProps> = ({
  label,
  placeholder,
  setTodoList,
}) => {
  const [inputValue, setInputValue] = useState("");

  function onSubmitTodo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTodoList((prevArray: Array<String>) => [...prevArray, inputValue]);
    setInputValue("");
  }

  function onChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  return (
    <form onSubmit={onSubmitTodo}>
      <div>
        <label htmlFor={label}>{label}</label>
      </div>
      <div>
        <input
          type='text'
          placeholder={placeholder}
          value={inputValue}
          onChange={onChangeInput}
        />
      </div>
    </form>
  );
};

export default TodoAddBar;
