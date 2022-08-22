import { ErrorMessage, Loader } from '../../shared';

import * as Styled from './styles';
import { ListBox } from './ListBox';

type Props = {
  ariaControls: string;
  error?: Error;
  loading: boolean;
  onClick: (listItem: any) => void;
  list: any;
}

export const Popup = ({
  ariaControls,
  error,
  loading,
  onClick,
  list,
}: Props) => {

  const loaderStyle = {
    $borderRadius: '4px',
    $height: '6px',
    $margin: '0',
  }

  const content = loading ?
    <Loader loading={ true } styleProps={ loaderStyle } /> : error ?
    <ErrorMessage>Error: { error.message }</ErrorMessage> :
    <ListBox
      ariaControls={ ariaControls }
      onClick={ onClick }
      list={ list }
    />

  return (
    <Styled.Popup>
      { content }
    </Styled.Popup>
  );
}
