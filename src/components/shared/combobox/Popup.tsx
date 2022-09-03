import { ErrorMessage, Loader } from '../../shared';
import { ListBox } from './ListBox';

import * as Styled from './styles';

type Props = {
  ariaControls: string;
  error?: Error;
  list: any;
  loading: boolean;
  onSelect: (listItem: any) => void;
  visible: boolean;
}

export const Popup = ({
  ariaControls,
  error,
  list,
  loading,
  onSelect,
  visible,
}: Props) => {
  const loaderStyle = {
    $borderRadius: '4px',
    $height: '6px',
    $margin: '0',
  }

  return (
    <Styled.Popup $visibility={ visible }>
      { loading ? (
        <Loader styleProps={ loaderStyle } />
      ) : error ? (
        <ErrorMessage>Error: { error.message }</ErrorMessage>
      ) : (
        <ListBox
          ariaControls={ ariaControls }
          list={ list }
          onClick={ onSelect }
        />
      ) }
    </Styled.Popup>
  );
}
