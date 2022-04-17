import './TodoDetail.css'
import {MainPreloader} from '../common/loader/MainPreloader'
import ArrowLeft from '../../assets/arrow-left.png'
import { useNavigate } from 'react-router-dom'

const TodoDetail = (props) => {
  let navigate = useNavigate()
  if(!props.detailTask) {
    return <MainPreloader/>
  }
  
  return (
    <div className="task-detail">
      <div onClick={() => navigate("/")} className="goto-main">
        <img src={ArrowLeft} alt="arrow_left" />
        <span>Back</span>
      </div>
      <div className="task-detail-desc task-detail__title">
        <div className="title">Title: </div>
        <div>{props.detailTask.title}</div>
      </div>
      <div className="task-detail-desc task-detail__description">
        <div className="title">Description:</div>
        <p>
          {props.detailTask.description
            ? props.detailTask.description
            : "Description not specified"}
        </p>
      </div>
      <div className="status task-detail-desc task-detail__status">
        <div className="title">Status:</div>
        <span className="status__itself">{props.detailTask.status}</span>
      </div>

      <div className="task-detail__buttons">
        <div className="task-detail__button">
          <button
            disabled={props.detailTask.status === "Completed" && true}
            onClick={() => props.completeTask()}
            className="button button-blue"
          >
            {props.detailTask.status === "Completed" ? "Completed" : 'Complete'}
          </button>
        </div>
        <div className="task-detail__button">
          <button
            onClick={() => props.onRemoveTask()}
            className="button button-red"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoDetail