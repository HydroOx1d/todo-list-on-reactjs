import { useState , useRef, useEffect} from "react";
import "./TodoHeader.css"
import Logout from '../../assets/logout.png'
import { NavLink} from "react-router-dom";

const TodoHeader = (props) => {

  const menu = useRef()
  const login = useRef()
  const [isMenu, setIsMenu] = useState(false)

  const handleClick = (e) => {
    if(e.target !== menu.current && e.target !== login.current) {
      setIsMenu(false)
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleClick)
    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [])
  

  return (
    <div className="todo-header">
      <div className="tasks-counter">
        <span>Todo App</span>
      </div>
      <div className="header-login">
        {props.email ? (
          <>
            <div onClick={() => setIsMenu(!isMenu)} className="header-login__name">
              <span ref={login}>{props.email}</span>
            </div>
            {isMenu && (
              <div ref={menu} className="header-login__menu">
                <div
                  onClick={() => props.onLogout()}
                  className="header-menu__item"
                >
                  <div className="header-menu__icon">
                    <img src={Logout} alt="logout" />
                  </div>
                  <span>Logout</span>
                </div>
              </div>
            )}
          </>
        ) : (
          <NavLink to="/login">
            <span>Login</span>
          </NavLink>
        )}
      </div>
    </div>
  );
}


export default TodoHeader