import React from 'react';

type Props = {
  text: string;
  onClick: () => void;
}

export const LinkButton = ({ text, onClick }: Props) =>
  <button
    className="linkButton"
    type="button"
    onClick={ onClick }
  >
    { text }
  </button>
