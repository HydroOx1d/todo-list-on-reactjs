import React, { Suspense } from "react";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { MainPreloader } from "./components/common/loader/MainPreloader";

const TodoDetailContainer = React.lazy(() => import('./components/todo-detail/TodoDetailContainer'))
const TodoMainContainer = React.lazy(() => import('./components/todo-main/TodoMainContainer'))
const LoginContainer = React.lazy(() => import('./components/login/LoginContainer'))
const RegisterContainer = React.lazy(() => import('./components/register/RegisterContainer'))

const App = (props) => {
  return (
    <HashRouter>
      <Provider store={store}>
        <div className="todo">
          <Suspense fallback={<MainPreloader/>}>
            <Routes>
              <Route path="/" element={<TodoMainContainer />} />
              <Route path="/login" element={<LoginContainer />} />
              <Route path="/register" element={<RegisterContainer />} />
              <Route path="/task/:id" element={<TodoDetailContainer />} />
            </Routes>
          </Suspense>
        </div>
      </Provider>
    </HashRouter>
  );
};

export default App;
