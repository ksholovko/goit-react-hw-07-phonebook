
import { useDispatch } from 'react-redux';
import { filterChange } from 'redux/filtersSlice';

import { nanoid } from "nanoid";
import css from "./filter.module.css";

export default function Filter() {
  
  const dispatch = useDispatch();
  
  const inputId = nanoid();

  const handleFilterChange = (event) => {
    dispatch(filterChange(event.target.value));
  }

return (
    <div className={css.container}>
      <label className={css.label} htmlFor={inputId}>Find contacts by name</label>
      <input className={css.filterInput} type="text" name="filter" id={inputId} onChange={handleFilterChange} />
    </div>
        )
}
    