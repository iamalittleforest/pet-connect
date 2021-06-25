//rough draft
const createPethandler = async (event) => {
    event.preventDefault();
//collect inputs
const petName = document.querySelector('#petName').value.trim();
const feline = document.querySelector("#felineOption").value.trim();
const canine = document.querySelector("#canineOption").value.trim();
const petAge = document.querySelector("#petAge").value.trim();



    if (petName && feline && canine && petAge) {
        const response = await fetch('/api/pets', {
            method: "POST",
            body: JSON.stringify({petName, feline, canine, petAge}),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            location.reload();
        } else {
            alert(response.statusText);
        }
    }
};
document
    .querySelector(".pet-info").addEventListener('submit', createPethandler);