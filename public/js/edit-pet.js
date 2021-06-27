// collect inputs from radio buttons
let gender = document.querySelector('#gender').value.trim();
Array.from(document.getElementsByClassName("radio")).forEach((a) => {
  a.addEventListener("click", function () {
    gender = this.value;
    console.log(gender);
  });
});

// define function to update pet
const updatePet = async (event) => {
  event.preventDefault();

  // collect inputs from textarea
  const id = window.location.toString().split('/').slice(-1)[0];
  const name = document.querySelector('#edit-pet-name').value.trim();
  const species = document.querySelector('#edit-pet-species').value.trim();
  const breed = document.querySelector('#edit-pet-breed').value.trim();
  const age = document.querySelector('#edit-pet-age').value.trim();
  // console.log(name && species && breed && gender && age);

  if (id && name && species && breed && gender && age) {
    const response = await fetch(`/api/pets/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ name, species, breed, gender, age }),
      headers: { 'Content-Type': 'application/json' }
    });

    // redirect to dashboard if pet update is successful
    if (response.ok) {
      document.location.replace(`/dashboard`);
    } else {
      alert(response.statusText);
    }
  }
};

// listen for click
document
  .querySelector('#update-pet-btn')
  .addEventListener('click', updatePet());

// define function to delete pet
const deletePet = async (event) => {
  event.preventDefault();

  // collect inputs
  const id = window.location.toString().split('/').slice(-1)[0];
  // console.log(id);

  if (id) {
    const response = await fetch(`/api/pets/${id}`, {
      method: 'DELETE'
    });

    // redirect to dashboard if pet delete is successful
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

// listen for click
document
  .querySelector('#delete-pet-btn')
  .addEventListener('click', deletePet());