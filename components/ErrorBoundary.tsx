"use client";

import React, { Component, ReactNode, ErrorInfo } from "react";
import Typography from "./ui/Typography";
import Container from "./ui/Container";
import BracketLink from "./ui/BracketLink";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-black flex items-center justify-center px-6">
          <Container size="md" className="text-center">
            <Typography.Heading size="xl" className="mb-8">
              SOMETHING WENT WRONG
            </Typography.Heading>
            <Typography.Body className="text-gray-400 mb-12">
              We apologize for the inconvenience. Please try refreshing the page
              or return to the homepage.
            </Typography.Body>
            <div className="flex gap-6 justify-center">
              <BracketLink href="/">Go Home</BracketLink>
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center gap-2 group"
              >
                <span className="text-accent transition-all duration-300 group-hover:-translate-x-1 text-lg">
                  [
                </span>
                <span
                  className="text-lg font-light tracking-[0.15em] text-gray-400 group-hover:text-accent transition-colors duration-300 uppercase"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  Refresh Page
                </span>
                <span className="text-accent transition-all duration-300 group-hover:translate-x-1 text-lg">
                  ]
                </span>
              </button>
            </div>
          </Container>
        </div>
      );
    }

    return this.props.children;
  }
}
