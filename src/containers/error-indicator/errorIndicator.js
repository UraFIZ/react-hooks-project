import React from 'react'

const ErrorIndicator = ({error}) => {
    console.log(error)
    return (
        <div className="error-indicator">
           {error}
        </div>
    )
}

export default ErrorIndicator
