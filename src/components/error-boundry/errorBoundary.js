import React, { Component } from 'react';

class ErrorBoundary extends Component {


  state = {
    hasError: false
  };

  componentDidCatch(one, two) {
    console.log(one);
    console.log(two)
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