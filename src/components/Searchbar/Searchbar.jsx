import { useState } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header, Form, BtnSubmit, Input } from './Searchbar.styled';
import Icon from '../../assets/glass.png';

export const Searchbar = ({ setSearch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (input.trim() === '') {
      toast.error('Enter search value!');
      setInput('');
      return;
    }
    setSearch({ movies: input.trim() });
	  setInput('');
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <BtnSubmit type="submit">
          <img src={Icon} alt="search" />
        </BtnSubmit>

        <Input
          type="text"
          name="search"
          value={input}
          autocomplete="off"
          autoFocus
          placeholder="Search Movies"
          onChange={e => setInput(e.target.value)}
        />
      </Form>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Header>
  );
};

Searchbar.propTypes = {
  setSearch: PropTypes.func.isRequired,
};
