import { useEffect } from "react"
import { removeUserData } from "../../services/userServices"
import { useNavigate } from "react-router-dom"
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
export const LogOut=()=>{
const navigate=useNavigate();
const {setCurrentUser}=useContext(UserContext)
useEffect(()=>{
      removeUserData();
      setCurrentUser({})
      navigate('/login')
},[setCurrentUser,navigate])

      return <></>
}