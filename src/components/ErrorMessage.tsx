import React from 'react'

interface ErrorMessageProps {
  error: string
}

export default function ErrorMessage({ error } : ErrorMessageProps) {
  return (
    <div>
      <p className="font-medium text-red-500 text-center mb-2">{error}</p>
    </div>
  );
}
