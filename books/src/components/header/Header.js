import {Navigation} from "./Navigation"
import { Logo } from "./Logo"
import './Header.css'

export const Header=()=>{
      return (
            <header className="header">
            <Logo/>
            <Navigation />  
            </header>
      )
}