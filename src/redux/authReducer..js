import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";


let inititalState = {
  isAuth: false,

  uid: null,
  email: null,
};

export const authReducer = (state = inititalState, action) => {
  switch (action.type) {
    case "GET-AUTH-DATA": {
      return {
        ...state,
        ...action.authData,
        isAuth: true,
      };
    }
    case "LOGOUT": {
      return {
        ...state,
        isAuth: false,
        uid: null,
        email: null,
      };
    }
    default: {
      return state;
    }
  }
};

export const getAuthData = (uid, email) => {
  return {
    type: "GET-AUTH-DATA",
    authData: {
      uid,
      email,
    },
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};

export const getAuthDataThunk = () => {
  return (dispatch) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email } = user;
        dispatch(getAuthData(uid, email));
      }
    });
  };
};
