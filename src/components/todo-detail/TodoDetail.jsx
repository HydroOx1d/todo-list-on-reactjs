import {MainPreloader} from '../common/loader/MainPreloader'

const TodoDetail = (props) => {
  if(!props.detailTask) {
    return <MainPreloader/>
  }
  
  return (
    <div className="task-detail">
      
    </div>
  );
}

export default TodoDetail