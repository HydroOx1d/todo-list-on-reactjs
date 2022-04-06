import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";


let inititalState = {
  isAuth: false,

  uid: null,
  email: null,
  initialApp: false
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
    case "INITIAL-APP": {
      return {
        ...state,
        initialApp: true
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

const initialApp = () => ({
  type: "INITIAL-APP",
});

export const getAuthDataThunk = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          resolve(user)
        }
        reject('Not authorized')
      });
    }).then(userData => {
      const { uid, email } = userData;
      dispatch(getAuthData(uid, email));
    }).catch(e => e)
  };
};

export const initialAppThunk = () => dispatch => {
  let getAuthDataPromise = dispatch(getAuthDataThunk());
  getAuthDataPromise.then(() => {
    dispatch(initialApp());
  });
}
