// define function to login
const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  // redirect to home if logout is successful
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
};

// listen for submit
document
  .querySelector("#logout")
  .addEventListener("click", logout);