const signupFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const username = document.querySelector("#username").value.trim();
  const location = document.querySelector("#location").value.trim();
  const age = document.querySelector("#age-id").value.trim();

  if (email && password && username && location && age) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ email, password, username, location, age }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);