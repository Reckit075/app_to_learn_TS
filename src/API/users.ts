export function createUserApi(name: string, password: string): Promise<void> {
 return fetch('https://app-to-learn-ts.herokuapp.com/users/register', {
  method: 'POST',
  headers: {
   'Content-Type': 'application/json',
  },
  body: JSON.stringify({
   name: name.trim(),
   password: password.trim(),
  }),
 }).then((response) => {
  if (!response.ok) {
   throw new Error(response.statusText);
  }
  return response.json();
 });
}
export function loginUserApi(name: string, password: string): Promise<void> {
 return fetch('https://app-to-learn-ts.herokuapp.com/users/login', {
  method: 'POST',
  headers: {
   'Content-Type': 'application/json',
  },
  body: JSON.stringify({
   name: name.trim(),
   password: password.trim(),
  }),
 }).then((response) => {
  if (!response.ok) {
   throw new Error(response.statusText);
  }
  return response.json();
 });
}
