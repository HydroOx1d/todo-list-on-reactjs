

const TodoDetail = (props) => {
  if(!props.detailTask) {
    return <h1>Loading...</h1>
  }
  

  return (
    <div className="task-detail">
      <h1>{props.detailTask[0].data.title}</h1>
    </div>
  )
}

export default TodoDetail