import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';

const SERVICE_ID = 'service_yzwkeem';
const TEMPLATE_ID = 'template_a3eme37';
const USER_ID = '35kRJuyuyCCuuy7e2';

const Email = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully',
          iconColor: '#f44336',
          confirmButtonColor: '#f44336',
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (
    <section className='App'>
      <span style={{ color: 'red', fontSize: '1.25rem', fontWeight: 'bold' }}>
        Reach Out To Us
      </span>
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Email'
          name='from_email'
          placeholder='Email…'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Name'
          name='from_name'
          placeholder='Name…'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          name='message'
          placeholder='Message…'
          required
        />
        <Button type='submit' color='red'>
          Submit
        </Button>
      </Form>
    </section>
  );
};

export default Email;
