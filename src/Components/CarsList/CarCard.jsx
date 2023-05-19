import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const CarCard = ({
  id, model, make, picture, price,
}) => (
  <NavLink key={id} to={`/car/${id}`}>
    <div>
      <div className="picContainer">
        <img className="carPicture" src={picture} alt={picture} />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <p className="">{model}</p>
        <p className="">{make}</p>
        <h5 className="price">
          $
          {' '}
          {price}
        </h5>
      </div>
    </div>
  </NavLink>
);

CarCard.propTypes = {
  id: PropTypes.number.isRequired,
  model: PropTypes.string.isRequired,
  make: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CarCard;
