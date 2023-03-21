import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TodoList = () => {
  const location = useLocation();

  // Change Page Title: Todolist
  useEffect(() => {
    if (location.pathname.slice(0, 9) === "/todolist") {
      document.title = "Todolist";
    }
  }, [location.pathname]);

  return <h1>Hello</h1>;
};

export default TodoList;
