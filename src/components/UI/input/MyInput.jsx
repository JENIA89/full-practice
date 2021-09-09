import React from 'react';
import cls from './MyInput.module.css';

const MyInput = (props) => {
  return <input className={cls.myInput} {...props} />;
};

export default MyInput;
