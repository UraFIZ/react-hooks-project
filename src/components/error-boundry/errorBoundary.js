import React, { Component } from 'react';

class ErrorBoundary extends Component {


  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return "An error has occurred";
    }

    return this.props.children;
  }
}

export default ErrorBoundary