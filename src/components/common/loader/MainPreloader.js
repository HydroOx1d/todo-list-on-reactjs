import "./MainLoader.css"
import Loader from '../../../assets/MainLoader.svg'


export const MainPreloader = () => {
  return (
    <div className="main-preloader">
      <img src={Loader} alt="" />
    </div>
  )
}