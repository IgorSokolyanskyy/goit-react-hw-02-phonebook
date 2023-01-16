import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Input, Button, FormList } from './ContactForm.styled';
import { nanoid } from 'nanoid';
// import * as yup from 'yup';

// const schema = yup.object().shape({
//   name: yup.string().required('Name may contain only letters'),
//   numder: yup
//     .string()
//     .required('Phone number must be digits and can contain spaces'),
// });

const nameInputId = nanoid();
const numberInputId = nanoid();

const initialValues = {
  name: '',
  number: '',
};

export default function ContactForm({ onSubmit, contacts }) {
  const handleSubmit = (values, { resetForm }) => {
    const checkedName = contacts.map(contact => contact.name);

    if (checkedName.includes(values.name)) {
      alert(`${values.name} is already in contacts`);
      return;
    }

    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormList autoComplete="off">
        <label htmlFor={nameInputId}>
          <p>Name</p>
          <Input
            id={nameInputId}
            type="text"
            name="name"
            placeholder="Full name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          {/* <ErrorMessage name="name" /> */}
        </label>

        <label htmlFor={numberInputId}>
          <p>Number</p>
          <Input
            id={numberInputId}
            type="tel"
            name="number"
            placeholder="111-11-11"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          {/* <ErrorMessage name="number" /> */}
        </label>

        <Button type="submit">Add contact</Button>
      </FormList>
    </Formik>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';

// class ContactForm extends Component {
//   static propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };

//   state = {
//     name: '',
//     number: '',
//   };

//   nameInputId = nanoid();
//   numberInputId = nanoid();

//   onChanchEvent = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };

//   onSubmitData = e => {
//     e.preventDefault();

//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     const { name, number } = this.state;

//     return (
//       <form onSubmit={this.onSubmitData}>
//         <label htmlFor={this.nameInputId}>
//           Name
//           <input
//             id={this.nameInputId}
//             type="text"
//             name="name"
//             value={name}
//             onChange={this.onChanchEvent}
//             placeholder="Full name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </label>

//         <label htmlFor={this.numberInputId}>
//           Number
//           <input
//             id={this.numberInputId}
//             type="tel"
//             name="number"
//             value={number}
//             onChange={this.onChanchEvent}
//             placeholder="111-11-11"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </label>

//         <button type="submit">Add contact</button>
//       </form>
//     );
//   }
// }

// export default ContactForm;
