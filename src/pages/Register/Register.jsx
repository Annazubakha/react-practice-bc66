import { userRegister } from 'myRedux/auth/operations';
import { useDispatch } from 'react-redux';

const Register = () => {
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    const { name, email, password } = event.target.elements;

    dispatch(
      userRegister({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Name <input type="text" name="name" />
      </label>
      <label>
        Email <input type="email" name="email" />
      </label>
      <label>
        Password <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
