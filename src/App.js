import { Route, Routes } from 'react-router-dom';
import TodoDetailContainer from './components/todo-detail/TodoDetailContainer';
import TodoMain from './components/todo-main/TodoMain';

const App = (props) => {
  return (
    <div className="todo">
      <Routes>
        <Route path="/" element={<TodoMain/>}/>
        <Route path='/task/:id' element={<TodoDetailContainer/>}/>
      </Routes>
    </div>
  );
}

export default App