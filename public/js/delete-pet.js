// define function to delete pet
const deletePet = async (event) => {
  event.preventDefault();

  // collect inputs
  const id = window.location.toString().split("/").slice(-1)[0];
  // console.log(id);

  if (id) {
    const response = await fetch(`/api/pets/${id}`, {
      method: "DELETE",
    });

    // redirect to dashboard if pet delete is successful
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

// listen for click
document
  .querySelector("#delete-pet-btn")
  .addEventListener("click", deletePet());
