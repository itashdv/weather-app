import { ChangeEvent } from 'react';

import * as Styled from './styles';

type Props = {
  ariaControls: string;
  ariaLabel: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  input: string;
  list: any;
  placeholder: string;
}

export const Searchbox = ({
  ariaControls,
  ariaLabel,
  handleChange,
  input,
  list,
  placeholder,
}: Props) => {
  return (
    <Styled.Input
      aria-controls={ ariaControls }
      aria-expanded={ list.length === 0 ? false : true }
      aria-label={ ariaLabel }
      onChange={ handleChange }
      placeholder={ placeholder }
      role={ 'combobox' }
      type={'search'}
      value={ input }
    />
  );
}
