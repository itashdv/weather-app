import React from 'react';
import * as Styled from './styles';

type Props = {
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
}

export const TextInput = ({
  name,
  onChange,
  placeholder,
  value,
}: Props) => (
  <Styled.TextInput
    type="text"
    name={ name }
    onChange={ onChange }
    placeholder={ placeholder }
    value={ value }
  />
);
