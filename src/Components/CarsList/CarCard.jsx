import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const CarCard = ({
  id, model, make, picture, price,
}) => (
  <NavLink key={id} to={`/car/${id}`}>
    <div>
      <div>
        <img src={picture} alt={picture} />
      </div>
      <div className="model-detail d-flex flex-column justify-content-center align-items-center">
        <h3 className="h4 mt-3">{model}</h3>
        <h3 className="h4 mt-3">{make}</h3>
        <h5>
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
