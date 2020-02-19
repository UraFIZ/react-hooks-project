import React, { Component } from 'react';
import ErrorIndicator from '../../containers/error-indicator'
class ErrorBoundary extends Component {


  state = {
    hasError: false,
    error: ''
  };

  componentDidCatch(error) {
    this.setState({ hasError: true, error });
  }

  render() {
    const {hasError, error} = this.state;
    if (hasError) {
      return <ErrorIndicator error={error.message}/>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary