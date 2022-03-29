import { ref, onValue } from "firebase/database";
import { database } from "../firebaseConfig";

let initialState = {
  tasks: [],
  addTaskInputValue: "",
  detailTask: null,
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-TASK": {
      return {
        ...state,
        tasks: [...action.task],
        addTaskInputValue: "",
      };
    }
    case "UPDATE-INPUT-VALUE": {
      return {
        ...state,
        addTaskInputValue: action.value,
      };
    }
    case "REMOVE-TASK": {
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.taskId),
      };
    }
    case "GET-DETAIL-TASK": {
      return {
        ...state,
        detailTask: state.tasks.filter((t) => t.id === action.id),
      };
    }
    default:
      return state;
  }
};

const addTask = (task) => {
  return {
    type: "ADD-TASK",
    task,
  };
};

export const removeTask = (taskId) => {
  return {
    type: "REMOVE-TASK",
    taskId,
  };
};

export const updateValue = (value) => {
  return {
    type: "UPDATE-INPUT-VALUE",
    value,
  };
};

export const getDetailTask = (id) => {
  return {
    type: "GET-DETAIL-TASK",
    id,
  };
};

export const getTasksData = (uid) => (dispatch) => {
  const starCountRef = ref(database, uid + "/tasks");
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    let resultArr = []
    for(let i in data) {
      resultArr.push(data[i])
    }
    dispatch(addTask(resultArr))
  });
};
