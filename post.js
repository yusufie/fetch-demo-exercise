const apiUrl = "https://jsonplaceholder.typicode.com";

async function fetchPosts() {
  const response = await fetch(`${apiUrl}/posts`);
  return await response.json();
}

function listPosts(postContainerElementId) {
  const postContainerElement = document.getElementById(
    `${postContainerElementId}`
  );
  fetchPosts().then((posts) => {
    console.log(posts);
    for (const post of posts) {
      console.log(post);
      postContainerElement.appendChild(postElement(post));
    }
  });
}

function postElement(post) {
  const pElement = document.createElement("p");
  pElement.innerText = post.title;
  const postTitleDiv = document.createElement("div");
  postTitleDiv.appendChild(pElement);
  return postTitleDiv;
}
