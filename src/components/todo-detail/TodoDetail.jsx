import {MainPreloader} from '../common/loader/MainPreloader'

const TodoDetail = (props) => {
  if(!props.detailTask) {
    return <MainPreloader/>
  }
  
  return (
    <div className="task-detail">
      <div className="task-detail__title">
        <span>Title: {props.detailTask.title}</span>
      </div>
      <div className="task-detail__description">
        <span>Description: {props.detailTask.description}</span>
      </div>
    </div>
  );
}

export default TodoDetail