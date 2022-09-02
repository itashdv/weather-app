export const fetchData = (url: string) => fetch(url).then(data => data.json());
