import { UserContext } from "../../context/UserContext"
import { useContext } from "react"
import { Outlet ,Navigate} from "react-router-dom"

export const RouteGuard=({
      children
})=>{

      const {user}=useContext(UserContext);
   
      if(!user.username){
            return <Navigate to='/login'/>
      }

return children ? children : <Outlet/>;

}