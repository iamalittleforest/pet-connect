// 1st draft for testing

  function getNewCategory(){
    const serviceCategory = document.querySelector('#service');
    const inquiryCategory = document.querySelector('#inquiry');
    const productsCategory = document.querySelector('#products');
    const meetupCategory = document.querySelector('#meetup');
    const trainingeCategory = document.querySelector('#training');

    if(serviceCategory.checked==true){
        return serviceCategory.value
    }else if(inquiryCategory.checked==true){
      return inquiryCategory.value
    }else if(productsCategory.checked==true){
      return productsCategory.value
    }else if(meetupCategory.checked==true){
      return meetupCategory.value
    }else if(trainingeCategory.checked==value){
      return trainingeCategory.value
    }
};

const editPost = async (event) => {
    event.preventDefault();
    const newCategory = getNewCategory().value

    const title = document.querySelector('#edit-title').value.trim();
    // this is where the new catergory value will be placed in a const
    const category = newcategory.value.trim();
    const description = document.querySelector('#edit-post-content').value.trim();

    if (title && category && description) {
        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' }
          });

        if (response.ok) {
            document.location.replace('/dashboard');
        } alert(response.statusText);

    }

};

document.querySelector('#edit-post').addEventListener('click', editPost());


// this will be for getint the radio button info later

// ------------------------------------------
// let chosenCategory = ;
// Array.from(document.getElementsByClassName("category")).forEach((a) => {
//   a.addEventListener("click", function () {
//     chosenSpecies = this.value;
//     console.log(chosenSpecies);
//   });
// });