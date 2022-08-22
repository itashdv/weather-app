import * as Styled from './styles';

type Props = {
  ariaControls: string;
  onClick: (listItem: any) => void;
  list: any;
}

export const ListBox = ({
  ariaControls,
  onClick,
  list
}: Props) => {
  if (list.length === 0) return null;

  return (
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
  );
}
