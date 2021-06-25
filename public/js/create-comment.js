// define function to create comment
const createCommentHandler = async (event) => {
    event.preventDefault();
  
    // collect inputs
    const comment = document.querySelector('#create-comment').value.trim();
    const post_id = window.location.toString().split('/').slice(-1)[0];
    // console.log(comment, post_id);
  
    if (comment && post_id) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ comment, post_id }),
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
  document.querySelector('.comment-form').addEventListener('submit', createCommentHandler);