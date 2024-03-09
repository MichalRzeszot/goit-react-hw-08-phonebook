import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from './redux/contacts/ContactSlice';

const Filter = () => {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const onChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return <input type="text" value={value} onChange={onChange} />;
};

export default Filter;
