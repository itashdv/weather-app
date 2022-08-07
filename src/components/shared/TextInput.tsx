import React from 'react';
import styled from 'styled-components';

const StyledInputText = styled.input`
  padding: 4px;
  width: 100%;
`;

type Props = {
  name: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = ({
  name,
  placeholder,
  value,
  onChange,
}: Props) => (
  <StyledInputText
    name={ name }
    placeholder={ placeholder }
    value={ value }
    onChange={ onChange }
    type="text"
  />
);
