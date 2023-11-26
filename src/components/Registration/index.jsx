import Form from "../Form";
import { useMutation } from "@apollo/client";
import { CREATE_NEW_USER } from "../../apolloClient/mutansions";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate()
  const [register] = useMutation(CREATE_NEW_USER);
  const registerHandler = (data) => {
    register({
      variables: {
        user: {
          login: data.login,
          password: data.password,
        },
      },
    }).then((res)=>navigate('/authorization')).catch(err=>console.log(err));
  };
  return (
    <Form text="Sign in" title="Registration" onSubmit={registerHandler} />
  );
};

export default Registration;
