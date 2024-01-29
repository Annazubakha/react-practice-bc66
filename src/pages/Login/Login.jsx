import { userLogin } from 'myRedux/auth/operations';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    dispatch(
      userLogin({
        email: email.value,
        password: password.value,
      })
    );
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Email <input type="email" name="email" />
      </label>
      <label>
        Password <input type="password" name="password" />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
