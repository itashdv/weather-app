import { ChangeEvent, useEffect, useRef } from 'react';

import * as Styled from './styles';
import { ErrorMessage, Loader } from '../../shared';

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

  const loaderStyle = {
    $borderRadius: '4px',
    $height: '6px',
    $margin: '0',
  }

  return (
    <Styled.Combobox ref={ ref }>
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

      <Styled.Popup>
        { loading && (
          <Loader loading={ true } styleProps={ loaderStyle } />
        ) }

        { error && <ErrorMessage>Error: { error.message }</ErrorMessage> }

        { !loading && list.length !== 0 && (
          <Styled.ListBox id={ ariaControls } role={ 'listbox' }>
            { list.map((listItem: any) => (
              <Styled.ListItem
                key={ listItem.id }
                onClick={ () => onClick(listItem) }
              >
                { `${ listItem.name }` }
              </Styled.ListItem>
            )) }
          </Styled.ListBox>
        ) }
      </Styled.Popup>
    </Styled.Combobox>
  );
}
