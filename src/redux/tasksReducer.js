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
        detailTask: action.taskData,
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
    dispatch(addTask(resultArr));
    // console.log(resultArr)
  });
};
