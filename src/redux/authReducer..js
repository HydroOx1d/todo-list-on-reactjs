let inititalState = {
  isAuth: false,


  uid: null,
  email: null,
}

export const authReducer = (state = inititalState, action) => {
  switch(action.type) {
    case "GET-AUTH-DATA": {
      return {
        ...state,
        ...action.authData,
        isAuth: true
      }
    }
    default: {
      return state
    }
  }
}

export const getAuthData = (uid, email) => {
  return {
    type: "GET-AUTH-DATA",
    authData: {
      uid,
      email
    }
  };
}
