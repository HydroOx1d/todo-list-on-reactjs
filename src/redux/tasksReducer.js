import { ref, onValue, set, push, get} from "firebase/database";
import { database } from "../firebaseConfig";

let initialState = {
  tasks: [],
  detailTask: null,
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET-TASKS": {
      return {
        ...state,
        tasks: [...action.task],
      };
    }
    case "GET-DETAIL-TASK": {
      return {
        ...state,
        detailTask: action.taskData,
      };
    }
    default:
      return state;
  }
};

const getTasks = (task) => {
  return {
    type: "GET-TASKS",
    task,
  };
};

export const getDetailTask = (taskData) => {
  return {
    type: "GET-DETAIL-TASK",
    taskData,
  };
};

export const getTasksData = (uid) => (dispatch) => {
  const tasksRef = ref(database, uid + "/tasks");
  onValue(tasksRef, (snapshot) => {
    const data = snapshot.val();
    let resultArr = [];
    for (let i in data) {
      resultArr.push({
        taskId: i,
        data: data[i],
      });
    }
    dispatch(getTasks(resultArr));
  });
};

export const addTask = (uid, data) => {
  const tasksList = ref(database, uid + "/tasks");
  const newTask = push(tasksList);
  set(newTask, data);
};

export const getDetailTaskThunk = (uid, taskId) => {
  return (dispatch) => {
    get(ref(database, uid + "/tasks/" + taskId))
      .then((snapshot) => {
        if (snapshot.exists()) {
          dispatch(getDetailTask(snapshot.val()));
        } else {
          console.log("No data available");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
};
