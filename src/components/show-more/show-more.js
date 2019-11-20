import React from 'react';
import PropTypes from 'prop-types';

const ShowMore = ({onClick}) => (
  <div className="catalog__more">
    <button onClick={onClick} className="catalog__button" type="button">Show more</button>
  </div>
);

ShowMore.propTypes = {
  onClick: PropTypes.func
};

export default ShowMore;
