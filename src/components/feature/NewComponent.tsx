import { useNewHook } from '../../hooks/useNewHook';
import { getSearchQuery } from '../../utils';

export const NewComponent = () => {
  const {
    data,
    error,
    loading,
    input,
    onChange
  } = useNewHook(getSearchQuery);

  console.log({ data, error, loading });

  return (
    <div style={{ margin: '6px' }}>
      <input
        value={ input }
        onChange={ onChange }
        type={ 'search' }
        style={{
          padding: '4px',
          width: '100%',
        }}
      />
      { loading && <p>Loading..</p> }
    </div>
  );
}
