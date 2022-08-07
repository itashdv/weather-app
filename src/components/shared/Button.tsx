import React from 'react';

type Props = {
  text: string;
  onClick: () => void;
}

export const Button = ({ text, onClick }: Props) =>
  <button
    type="button"
    onClick={ onClick }
  >
    { text }
  </button>
