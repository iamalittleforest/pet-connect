// collect inputs from radio buttons
let category = null;
Array.from(document.getElementsByClassName("radio")).forEach((a) => {
  a.addEventListener("click", function () {
    category = this.value;
    console.log(category);
  });
});

// define function to create post
const createPost = async (event) => {
  event.preventDefault();

  // collect inputs from textarea
  const title = document.querySelector('#create-post-title').value.trim();
  const description = document.querySelector('#create-post-description').value.trim();
  // console.log(title, category, description);

  if (title && category && description) {
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, category, description }),
      headers: { 'Content-Type': 'application/json' }
    });

    // redirect to dashboard if post creation is successful
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

// listen for submit
document
  .querySelector('.post-form')
  .addEventListener('submit', createPost);