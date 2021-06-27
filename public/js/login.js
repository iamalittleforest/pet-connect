// define function to login
const login = async (event) => {
  event.preventDefault();

  // collect inputs
  const email = document.querySelector("#login-email").value.trim();
  const password = document.querySelector("#login-password").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    // redirect to dashboard if sign up is successful
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

// listen for submit
document
  .querySelector(".login-form")
  .addEventListener("submit", login);