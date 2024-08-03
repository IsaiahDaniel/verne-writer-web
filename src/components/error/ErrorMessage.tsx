import React from 'react'

type ErrorMessageProps = {
  message: any;
}

const ErrorMessage = (message: any) => {
  return (
    <div className="text-red-400 text-xs">{message}</div>
  );
}

export default ErrorMessage