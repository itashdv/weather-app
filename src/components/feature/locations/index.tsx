import { useContext, useEffect, useRef } from 'react';

import { useLocation } from '../../../hooks';
import { AppContext } from '../../../context';
import { ErrorMessage, Text } from '../../shared';
import { Location } from '../location';

import * as Styled from './styles';

export const Locations = () => {
  const context = useRef(useContext(AppContext));

  const { locations, removeLocation } = useContext(AppContext);

  const { data, error, loading } = useLocation();

  useEffect(() => {
    if (!data || !data[0].id) return;

    context.current.addLocation(data[0]);
  }, [data]);

  const textStyle = {
    $align: 'center',
    $color: '#000',
    $size: '16px',
  }

  return (
    <Styled.Locations>
      { loading && (
        <Text styleProps={ textStyle }>
          Getting your current location..
        </Text>
      ) }

      { error && <ErrorMessage>{ error.message }</ErrorMessage> }

      { locations.map(location => (
        <Location
          key={ location.id }
          location={{
            id: location.id,
            name: location.name,
            url: location.url
          }}
          onRemove={
            location.current
              ? undefined
              : removeLocation
          }
        />
      )) }

      

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in nunc semper, accumsan urna vel, porta sapien. Sed vehicula, dui sit amet tincidunt scelerisque, dui nulla imperdiet lectus, non tincidunt massa ipsum sit amet sapien. Curabitur dictum convallis mi, id interdum massa semper et. Suspendisse viverra nunc magna, id scelerisque tortor congue eget. Maecenas feugiat in orci at porttitor. Fusce ut eleifend nisi. Duis vitae orci suscipit, pharetra sem eget, vulputate sapien. Cras nunc massa, varius ut bibendum sed, tempus id nisl. Mauris imperdiet non enim ut mattis. Quisque convallis convallis sem ut sollicitudin.

Nulla condimentum id nibh eget lacinia. Sed aliquam tellus quis mi facilisis accumsan. Vivamus faucibus nisi dui. Nulla congue, quam et luctus ullamcorper, urna ipsum gravida nulla, cursus condimentum orci purus euismod velit. Curabitur ullamcorper nunc et orci dapibus porttitor. Nunc et posuere mauris. Sed lobortis et nulla ac tincidunt. Etiam nulla orci, condimentum ut placerat id, bibendum ac neque. Vestibulum orci ante, rhoncus non ante ac, rhoncus auctor lorem. Maecenas in mauris et ante suscipit lacinia. Aenean vel placerat nibh. In tempus a augue sit amet aliquet.

Sed tincidunt eget leo id dignissim. Nam convallis pretium sapien, non finibus orci tempus eu. Sed vestibulum ac tortor eget dignissim. Ut a massa metus. Quisque rutrum lacinia purus, vitae sollicitudin est convallis a. Nunc mollis arcu ornare interdum pretium. Aliquam erat volutpat. Sed quam mi, tempor et augue ut, commodo elementum nulla. Sed vehicula vestibulum tortor, et eleifend libero commodo non.

Donec ut arcu est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In nec eros dapibus, fringilla quam ut, rutrum urna. Duis commodo enim id erat convallis, at interdum nisl feugiat. Vestibulum euismod efficitur lacus, a sodales lectus tempor vel. Nunc orci felis, consectetur ut dolor vel, ultrices aliquet libero. Maecenas in magna vel purus pulvinar tincidunt tincidunt vel metus. Donec pharetra mi erat, a fermentum dolor ultricies et. Aliquam porta, diam at scelerisque tincidunt, dui est porta lorem, ac consectetur purus nisl in orci. Morbi non vulputate tellus, ut porttitor erat. Proin porta, augue non fermentum iaculis, sapien purus viverra eros, sit amet posuere dolor justo sed arcu. Sed in posuere erat. Quisque et varius ipsum, in lacinia libero.

Nulla vulputate enim at nisl viverra, tristique volutpat est interdum. Aenean consectetur porta odio, dictum scelerisque sem tristique vel. Mauris quis odio eu augue lobortis fringilla. In auctor, leo in sollicitudin porttitor, enim dui lobortis lacus, a ultrices enim mauris eu elit. Nulla ut orci gravida, volutpat velit et, finibus sem. Donec sagittis odio est, nec consequat lorem malesuada dignissim. Morbi eget mollis nibh, ac posuere nulla. Proin nulla elit, suscipit et ornare et, commodo quis risus. 
    </Styled.Locations>
  );
}
