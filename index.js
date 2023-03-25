// Add your code here
function submitData(name, email) {
  const userData = {
    name: name,
    email: email,
  };

  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(userData),
  };
  return fetch('http://localhost:3000/users', config)
    .then((res) => res.json())
    .then((data) => document.body.append(`New user added: Name: ${data.name}, Email: ${data.email}, ID: ${data.id}`))
    .catch((err) => document.body.append(err.message));
}
