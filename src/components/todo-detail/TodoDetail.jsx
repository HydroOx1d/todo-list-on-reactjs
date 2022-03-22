

const TodoDetail = (props) => {
  if(!props.detailTask) {
    return <h1>Loading...</h1>
  }

  console.log(props.detailTask);

  return (
    <div className="task-detail">
      <h1>{props.detailTask[0].title}</h1>
    </div>
  )
}

export default TodoDetail