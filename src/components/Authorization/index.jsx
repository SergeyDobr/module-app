import Form from "../Form"

import { useLazyQuery } from "@apollo/client";
import { GET_TOKEN } from "../../apolloClient/queries";
import { useNavigate } from 'react-router-dom';

import { useDispatch } from "react-redux"
import { setUserAC } from "../../store/userReducer"

const Authorization = () => {
  const dispatch = useDispatch()

  const [logIN] = useLazyQuery(GET_TOKEN)
  const navigate = useNavigate();
  const loginHandler = (data) => {
    logIN({
      variables: {
        login: data.login,
        password: data.password,
      }
    }).then((result) => {
      if (result.data.login) {
        dispatch(setUserAC(result.data.login, result.variables.login))
        return navigate('/');
      } else {
        alert("Ошибка, попробуйте еще раз")
      }
    })
  }
  return (
    <Form text='Log In' title="Authorization" onSubmit={loginHandler} />
  )
}

export default Authorization