import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFied, initializeForm } from '../../moduels/auth';
import AuthForm from '../../components/auth/AuthForm';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.register,
  }));
  // input
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeFied({
        form: 'register',
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
    dispatch(initializeForm('register'));
  }, [dispatch]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default RegisterForm;
