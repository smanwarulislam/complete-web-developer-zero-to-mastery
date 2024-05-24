import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }
  
  render() {
    if (this.state.hasError) {
      return <h1>Oops. That is not good</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

/**
 * Note:
 * Reference websites:
 * · Error Boundaries – React
 * https://legacy.reactjs.org/docs/error-boundaries.html
 * · React.Component: Catching rendering errors with an error boundary
 * https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
 * Catching rendering errors with an error boundary
 * Note
 * There is currently no way to write an error boundary as a function component. However, you don’t have to write the error boundary class yourself.
 * For example, you can use react-error-boundary instead.
 * https://github.com/bvaughn/react-error-boundary
 */