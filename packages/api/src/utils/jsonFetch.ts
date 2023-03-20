const jsonFetch = (url: string): Promise<any> =>
  fetch(url).then((response) => response.json());

export default jsonFetch;
