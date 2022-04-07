import {MainPreloader} from '../common/loader/MainPreloader'

const TodoDetail = (props) => {
  if(!props.detailTask) {
    return <MainPreloader/>
  }
  
  return (
    <div className="task-detail">
      <h1>{props.detailTask.title}</h1>
    </div>
  )
}

export default TodoDetail