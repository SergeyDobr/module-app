import { useLazyQuery } from "@apollo/client";
import { gql } from "@apollo/client"
import { useState } from "react";
import { setUserTokenAC } from "../../store/userReducer";
import { useDispatch } from "react-redux";

const Input = () => {
   const GET_TOKEN = gql`
      query Login($login: String, $password: String) {
         login(login: $login, password: $password)
      }
   `;
   const [logIN] = useLazyQuery(GET_TOKEN)

   const [userInfo, setUserInfo] = useState({
      login: '',
      password: '',
   })

   const handleUpdateLogin = (e) => {
      setUserInfo({ ...userInfo, login: e.target.value })
   }
   const handleUpdatePass = (e) => {
      setUserInfo({ ...userInfo, password: e.target.value })
   }
   const dispatch = useDispatch()

   const handleGetToken = () => {
      logIN({ variables: userInfo })
         .then((result) => console.log(dispatch(setUserTokenAC(result.data.login))))
   }

   return (
      <>
         <input value={userInfo.login} onChange={handleUpdateLogin} type="text" />
         <input value={userInfo.password} onChange={handleUpdatePass} type="password" />
         <button onClick={handleGetToken} >Send</button>
      </>
   )
}

export default Input