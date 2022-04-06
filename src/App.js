import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import TodoDetailContainer from "./components/todo-detail/TodoDetailContainer";
import TodoMainContainer from "./components/todo-main/TodoMainContainer";

const App = (props) => {

  return (
    <div className="todo">
      <Routes>
        <Route path="/" element={<TodoMainContainer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/task/:id" element={<TodoDetailContainer />} />
      </Routes>
    </div>
  );
};

export default App;
