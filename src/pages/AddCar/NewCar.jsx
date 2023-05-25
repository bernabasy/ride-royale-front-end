import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import {
  Container, Row, Col, Form, Button,
} from 'react-bootstrap';
import './newCar.css';

const NewCar = () => {
  const [model, setModel] = useState('');
  const [make, setMake] = useState('');
  const [picture, setPicture] = useState('');
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');
  const user = useSelector((state) => state.user);
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const data = {
      user_id: user.user.id, model, make, picture, price,
    };
    axios.post('http://127.0.0.1:3000/api/v1/cars', data)
      .then((response) => {
        setLoading(false);
        setModel('');
        setMake('');
        setPicture('');
        setPrice('');
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
      <div className="d-flex flex-column justify-content-center align-items-center image-overlay">
        <Row className="w-100">
          <Col md={12}>
            <h2 className="text-center text-back text-uppercase h2">Add Car</h2>
            <hr className="border-2 w-full mb-3" />
            <Form onSubmit={handleSubmit} className="w-50 mx-auto">
              <div className="mb-3">
                <label htmlFor="model">
                  Model:
                  <input
                    type="text"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    className="form-control text-black width"
                  />
                </label>
              </div>
              <div className="mb-3">
                <label htmlFor="make">
                  Make:
                  <input
                    type="text"
                    value={make}
                    onChange={(e) => setMake(e.target.value)}
                    className="form-control text-black width"
                  />
                </label>
              </div>
              <div className="mb-3">
                <label htmlFor="Picture">
                  Picture:
                  <input
                    type="text"
                    value={picture}
                    onChange={(e) => setPicture(e.target.value)}
                    className="form-control text-black width"
                  />
                </label>
              </div>
              <div className="mb-3">
                <label htmlFor="Price">
                  Price:
                  <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="form-control text-black width"
                  />
                </label>
              </div>
              {loading ? (
                <Button
                  type="button"
                  className="btn btn-primary btn-block disabled"
                >
                  <i className="fa-solid fa-spinner fa-spin" />
                </Button>
              ) : (
                <Button type="submit" className="btn btn-primary btn-block">
                  Add
                </Button>
              )}
            </Form>
            <p className="fs-5 fw-semibold">{responseMsg}</p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default NewCar;
