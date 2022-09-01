import { ChangeEvent } from 'react';

import * as Styled from './styles';

type Props = {
  ariaControls: string;
  ariaExpanded: boolean;
  ariaLabel: string;
  input: string;
  onBlur?: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  placeholder: string;
}

export const Searchbox = ({
  ariaControls,
  ariaExpanded,
  ariaLabel,
  input,
  onBlur,
  onChange,
  onFocus,
  placeholder,
}: Props) => (
  <Styled.Input
    aria-controls={ ariaControls }
    aria-expanded={ ariaExpanded }
    aria-label={ ariaLabel }
    onBlur={ onBlur }
    onChange={ onChange }
    onFocus={ onFocus }
    placeholder={ placeholder }
    role={ 'combobox' }
    type={'search'}
    value={ input }
  />
);
