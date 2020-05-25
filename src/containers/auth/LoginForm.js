import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFied, initializeForm } from '../../moduels/auth';
import AuthForm from '../../components/auth/AuthForm';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.login,
  }));
  // input
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeFied({
        form: 'login',
        key: name,
        value,
      }),
    );
  };
  // form
  const onSubmit = (e) => {
    e.preventDefault();
  };
  // init
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default LoginForm;
