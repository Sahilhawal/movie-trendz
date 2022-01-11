import React from "react";
import { Alert } from "antd";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      console.log("error", this.state);
      // You can render any custom fallback UI
      return (
        <Alert
          message="Error"
          description="Something went wrong"
          type="error"
          showIcon
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
