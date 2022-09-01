import * as Styled from './styles';

type Props = {
  ariaControls: string;
  list: any;
  onClick: (listItem: any) => void;
}

export const ListBox = ({
  ariaControls,
  list,
  onClick,
}: Props) => {
  if (list.length === 0) return null;

  const handleClick = (listItem: any) => onClick(listItem);

  return (
    <Styled.ListBox id={ ariaControls } role={ 'listbox' }>
      { list.map((listItem: any, index: number) => (
        <Styled.ListItem
          key={ listItem.id ? listItem.id : index }
          onClick={ () => handleClick(listItem) }
        >
          { `${ listItem.label ? listItem.label : 'No label' }` }
        </Styled.ListItem>
      )) }
    </Styled.ListBox>
  );
}
