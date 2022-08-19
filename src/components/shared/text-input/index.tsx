import { ChangeEvent } from 'react';
import * as Styled from './styles';

type Props = {
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  role?: string;
  type: string;
  value: string;
}

export const TextInput = ({
  name,
  onChange,
  placeholder,
  role,
  type,
  value,
}: Props) => (
  <Styled.TextInput
    name={ name }
    onChange={ onChange }
    placeholder={ placeholder }
    role={ role }
    type={ type }
    value={ value }
  />
);
