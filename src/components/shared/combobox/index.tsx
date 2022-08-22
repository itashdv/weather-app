import { ChangeEvent, useEffect, useRef } from 'react';

import * as Styled from './styles';
import { Searchbox } from './Searchbox';
import { Popup } from './Popup';

type Props = {
  ariaLabel: string;
  comboboxName: string;
  error?: Error;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  input: string;
  list: any;
  loading: boolean;
  onClick: (listItem: any) => void;
  onClickOutside: () => void;
  placeholder: string;
}

export const Combobox = ({
  ariaLabel,
  comboboxName,
  error,
  handleChange,
  input,
  list,
  loading,
  onClick,
  onClickOutside,
  placeholder,
}: Props) => {

  const ariaControls = `${ comboboxName }-listbox`;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    }

    document.addEventListener('click', handleClick, true);

    return () => document.removeEventListener('click', handleClick, true);
  }, [onClickOutside]);

  return (
    <Styled.Combobox ref={ ref }>
      <Searchbox
        ariaControls={ ariaControls }
        ariaLabel={ ariaLabel }
        handleChange={ handleChange }
        input={ input }
        list={ list }
        placeholder={ placeholder }
      />

      <Popup
        ariaControls={ ariaControls }
        error={ error }
        loading={ loading }
        onClick={ onClick }
        list={ list }
      />
    </Styled.Combobox>
  );
}
