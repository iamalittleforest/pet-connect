// collect inputs from radio buttons
let category = document.querySelector('#category').value.trim();
Array.from(document.getElementsByClassName("radio")).forEach((a) => {
  a.addEventListener("click", function () {
    category = this.value;
    console.log(category);
  });
});

// define function to update post
const updatePost = async (event) => {
  event.preventDefault();

  // collect inputs
  const id = window.location.toString().split('/').slice(-1)[0];
  const title = document.querySelector('#edit-post-title').value.trim();
  const description = document.querySelector('#edit-post-description').value.trim();
  // console.log(id, title, category, description);

  if (id && title && category && description) {
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, category, description }),
      headers: { 'Content-Type': 'application/json' }
    });

    // redirect to dashboard if post update is successful
    if (response.ok) {
      document.location.replace(`/dashboard`);
    } else {
      alert(response.statusText);
    }
  }
};

// listen for click
document
  .querySelector('#update-post-btn')
  .addEventListener('click', updatePost());

// define function to delete post
const deletePost = async (event) => {
  event.preventDefault();

  // collect inputs
  const id = window.location.toString().split('/').slice(-1)[0];
  // console.log(id);

  if (id) {
    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE'
    });

    // redirect to dashboard if post delete is successful
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

// listen for lick
document
  .querySelector('#delete-post-btn')
  .addEventListener('click', deletePost());