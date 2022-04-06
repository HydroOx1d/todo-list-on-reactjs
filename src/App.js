import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import TodoDetailContainer from "./components/todo-detail/TodoDetailContainer";
import TodoMainContainer from "./components/todo-main/TodoMainContainer";
import LoginContainer from "./components/login/LoginContainer";
import RegisterContainer from "./components/register/RegisterContainer";

const App = (props) => {

  return (
    <div className="todo">
      <Routes>
        <Route path="/" element={<TodoMainContainer />} />
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/register" element={<RegisterContainer />} />
        <Route path="/task/:id" element={<TodoDetailContainer />} />
      </Routes>
    </div>
  );
};

export default App;
