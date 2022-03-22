import { useMatch } from "react-router-dom"


export const withRouter = (Component) => {
  let WithRouterComponent = (props) => {
    let match = useMatch('/task/:id')
    return <Component {...props} match={match}/>
  }
  return WithRouterComponent
}
