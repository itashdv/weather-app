import { ChangeEvent, useEffect, useState } from 'react';

import { Searchbox } from './Searchbox';
import { Popup } from './Popup';

import * as Styled from './styles';

type Props = {
  ariaLabel: string;
  comboboxName: string;
  error?: Error;
  input: string;
  list: any;
  loading: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSelect: (listItem: any) => void;
  placeholder: string;
}

export const Combobox = ({
  ariaLabel,
  comboboxName,
  error,
  input,
  list,
  loading,
  onChange,
  onSelect,
  placeholder,
}: Props) => {
  const ariaControls = `${ comboboxName }-listbox`;

  const [popup, setPopup] = useState(false);

  const [visible, setVisible] = useState(false);

  const onBlur = () => setPopup(false);

  const onFocus = () => setPopup(true);

  useEffect(() => {
    const id = setTimeout(() => setVisible(popup), 200);
    
    return () => clearTimeout(id);
  }, [popup]);

  return (
    <Styled.Combobox>
      <Searchbox
        ariaControls={ ariaControls }
        ariaExpanded={ list.length === 0 ? false : true }
        ariaLabel={ ariaLabel }
        input={ input }
        onBlur={ onBlur }
        onChange={ onChange }
        onFocus={ onFocus }
        placeholder={ placeholder }
      />

      <Popup
        ariaControls={ ariaControls }
        error={ error }
        list={ list }
        loading={ loading }
        onSelect={ onSelect }
        visible={ visible }
      />
    </Styled.Combobox>
  );
}
