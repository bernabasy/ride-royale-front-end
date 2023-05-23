import { useState } from 'react';
import axios from 'axios';
import {
  Container, Row, Col, Form, Button,
} from 'react-bootstrap';
import './newCar.css';

const NewCar = () => {
  const [model, setModel] = useState('');
  /* eslint-disable-next-line camelcase */
  const [user_id, setUser_id] = useState('');
  const [make, setMake] = useState('');
  const [picture, setPicture] = useState('');
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const data = {
      /* eslint-disable-next-line camelcase */
      model, make, picture, price, user_id,
    };
    axios.post('http://127.0.0.1:3000/cars', data)
      .then((response) => {
        setLoading(false);
        setModel('');
        setMake('');
        setPicture('');
        setPrice('');
        /* eslint-disable-next-line camelcase */
        setUser_id('');
        setResponseMsg(response.data.success);
        if (responseMsg) {
          setTimeout(() => {
            setResponseMsg('');
          }, 1000);
        }
      })
      .catch((error) => {
        setLoading(false);
        setModel('');
        setMake('');
        setPicture('');
        setPrice('');
        /* eslint-disable-next-line camelcase */
        setUser_id('');
        setResponseMsg(error.response.data.error);
        if (responseMsg) {
          setTimeout(() => {
            setResponseMsg('');
          }, 1000);
        }
        if (error.response.status === 400) {
          setResponseMsg('Invalid request');
        } else if (error.response.status === 401) {
          setResponseMsg('Unauthorized');
        } else if (error.response.status === 403) {
          setResponseMsg('Forbidden');
        } else if (error.response.status === 404) {
          setResponseMsg('Not found');
        } else if (error.response.status === 500) {
          setResponseMsg('Internal server error, pleas check you input data');
        } else if (error.response.status === 503) {
          setResponseMsg('Service unavailable');
        }
      });
  };

  return (
    <Container className="bg-wrapper_newCar container-fluid">
      
    </Container>
  );
};

export default NewCar;
