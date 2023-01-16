import PropTypes from 'prop-types';
import { Items, Item } from './ContactList.styled';
import { ImCross } from 'react-icons/im';

const ContactList = ({ contacts, onDeleteContact }) => (
  <Items>
    {contacts.map(({ id, name, number }) => (
      <Item key={id}>
        <p>
          {name}: {number}
        </p>
        <ImCross
          onClick={() => onDeleteContact(id)}
          color="#f13131"
          size="17px"
          cursor="pointer"
        />
      </Item>
    ))}
  </Items>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
