import React from 'react';
import { useDispatch } from 'react-redux';
import { getUserStart } from './userActions';

const user = () => {
  const dispatch = useDispatch();
  return () => {
    dispatch(getUserStart());
  };
};

export default user;
