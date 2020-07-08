import {Component} from 'react'

class ErrorBoundary extends Component {
  state = {
    error: null,
  }

  static getDerivedStateFromError(error) {
    return {
      error,
    }
  }

  render() {
    if (this.state.error)
      return (
        <p>
          Something unexpected happened. Please refresh the page to try again.
        </p>
      )
    return this.props.children
  }
}

export default ErrorBoundary
