// collect inputs from radio buttons
let gender = null;
Array.from(document.getElementsByClassName("radio")).forEach((a) => {
  a.addEventListener("click", function () {
    gender = this.value;
    console.log(gender);
  });
});

// define function to create pet
const createPet = async (event) => {
  event.preventDefault();

  // collect inputs from textarea
  const name = document.querySelector('#create-pet-name').value.trim();
  const species = document.querySelector('#create-pet-species').value.trim();
  const breed = document.querySelector('#create-pet-breed').value.trim();
  const age = document.querySelector('#create-pet-age').value.trim();
  console.log(name && species && breed && gender && age);
  
    if (name && species && breed && gender && age) {
      const response = await fetch('/api/pets', {
        method: 'POST',
        body: JSON.stringify({ name, species, breed, gender, age }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      // redirect to dashboard if pet creation is successful
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  // listen for submit
  document
    .querySelector('.create-pet-form')
    .addEventListener('submit', createPet);