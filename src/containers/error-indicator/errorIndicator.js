import React from 'react';
import PropTypes from 'prop-types';

const ErrorIndicator = ({error}) => {
    return (
        <div className="error-indicator">
           {error}
        </div>
    )
}

export default ErrorIndicator

ErrorIndicator.propTypes = {
    error: PropTypes.string
}
