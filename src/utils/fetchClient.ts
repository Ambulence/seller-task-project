const JSON_API = 'https://jsonplaceholder.typicode.com/';

export function getData<T>(url: string): Promise<T> {
  return fetch(`${JSON_API}${url}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Can`t load data');
      }

      return response.json();
    });
}
