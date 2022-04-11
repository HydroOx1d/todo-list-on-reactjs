import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebaseConfig";


let inititalState = {
  isAuth: false,

  uid: null,
  email: null,
  initialApp: false,

  authSuccess: true,
  errMessage: '',
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
    case "HANDLE-AUTH-ERR": {
      return {
        ...state,
        authSuccess: action.status,
        errMessage: action.message
      }
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

export const handleAuthErr = (status, message) => {
  return {
    type: "HANDLE-AUTH-ERR",
    status, message
  };
} 

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

export const signIn = (email, password) => {
  return dispatch => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const { uid, email } = user;
        dispatch(getAuthData(uid, email));
        dispatch(handleAuthErr(true, ""));
      })
      .catch((err) => {
        if (err.message === "Firebase: Error (auth/user-not-found).") {
          dispatch(handleAuthErr(false, "Incorrect email"));
        } else {
          if (err.message === "Firebase: Error (auth/wrong-password).") {
            dispatch(handleAuthErr(false, "Incorrect email or password"));
          }
        }
      });
  }
}

export const signUp = (email, password) => {
  return dispatch => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const { uid, email } = user;
        dispatch(getAuthData(uid, email));
      })
      .catch((err) => {
        if (err.message === "Firebase: Error (auth/email-already-in-use).") {
          dispatch(handleAuthErr(false, "This email is already registered"));
        } else if (err.message === "Firebase: Error (auth/invalid-email).") {
          dispatch(handleAuthErr(false, "This email is already registered"));
        }
      });
  }
}

export const logoutThunk = () => {
  return dispatch => {
    signOut(auth).then(() => {
      dispatch(logout());
    });
  }
}

export const initialAppThunk = () => dispatch => {
  let getAuthDataPromise = dispatch(getAuthDataThunk());
  getAuthDataPromise.then(() => {
    dispatch(initialApp());
  });
}
