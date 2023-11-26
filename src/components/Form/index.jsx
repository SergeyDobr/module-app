
import { useState } from "react";

import styles from "./Form.module.css"
const Form = (props) => {

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
   const submitHandler = (e) => {
      e.preventDefault()
      props.onSubmit(userInfo)
   }
   return (
      <div className={styles.container}>
         <form className={styles.form} onSubmit={submitHandler}>
            <h2>{props.title}</h2>
            <label htmlFor="username">Username:</label>
            <input type="text" value={userInfo.login} onChange={handleUpdateLogin} />

            <label htmlFor="password">Password:</label>
            <input type="password" value={userInfo.password} onChange={handleUpdatePass} />

            <button type="submit">{props.text}</button>
         </form>
      </div>
   );

}

export default Form