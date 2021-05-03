import styles from '../../Phonebook.module.css';
import PropTypes from 'prop-types';

const Filter =({value, onChangeFilter}) => (
    <label className={styles.labelFilter} > Find contacts by name
       <input className={styles.input} type="text" value={value} onChange={onChangeFilter}  />
    </label>
)
Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func.isRequired,
  };
export default Filter;