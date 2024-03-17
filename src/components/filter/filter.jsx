import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/contactsSlice';
import css from './filter.module.css';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <label className={css.label}>
      Filter contacts by name:
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handleChangeFilter}
      />
    </label>
  );
};

export default Filter;
