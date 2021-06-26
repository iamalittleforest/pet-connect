// define function to create comment
const createComment = async (event) => {
  event.preventDefault();

  // collect inputs
  const body = document.querySelector('#comment-body').value.trim();
  const post_id = window.location.toString().split('/').slice(-1)[0];
  // console.log(body, post_id);

  if (body && post_id) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ body, post_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    // reload if comment submission is successful
    if (response.ok) {
      location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

// listen for submit
document.querySelector('.comment-form').addEventListener('submit', createComment);