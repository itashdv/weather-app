const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

const CITY_LIMIT = 5;

const QUERY_FETCH_INITIAL_STATE = {
  data: [],
  input: '',
  loading: false
}

export {
  API_KEY,
  CITY_LIMIT,
  QUERY_FETCH_INITIAL_STATE,
}
