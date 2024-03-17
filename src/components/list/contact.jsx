import PropTypes from 'prop-types';
import css from './contact.module.css';

const Contact = ({ contact, handleClick }) => {
  return (
    <li className={css.contactItem}>
      Name: {contact.name} <br />
      Number: {contact.number} <br />
      <button
        onClick={() => handleClick(contact.id)}
        className={css.deleteButton}
      >
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Contact;
