class UI {
  constructor() {
    this.post = document.querySelector('#posts');
    this.titleInput = document.querySelector('#title')
    this.bodyInput = document.querySelector('#body')
    this.idInput = document.querySelector('#id')
    this.postSubmit = document.querySelector('.post-submit')
    this.forState = 'add';
  }

  // Methods

  showPosts(posts) {
    let output = '';
    posts.forEach((post) => {
      output += `
      <div class="card mb3">
      <div class="card-body">
        <h4 class="card-title">${post.title}</h4>
       
        <p class="card-text">${post.body}</p>

        <a href="#" data-id="${post.id}" class="edit card-link">
        <i class="fas fa-pencil-alt"></i>
      </a>
     
      <a href="#" data-id="${post.id}" class="delete card-link">
      <i class="fas fa-trash-alt"></i>
      </a>

      </div>
      </div>
      `
    });

    this.post.innerHTML = output;

  }

  // Show Alert
  showAlert(msg, className) {
    this.clearAlert()

    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(msg));
    const container = document.querySelector('.postsContainer');
    const posts = document.querySelector('#posts');
    container.insertBefore(div, posts)

    // Timeout
    setTimeout(() => {
      this.clearAlert()
    }, 3000);

  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert')

    if (currentAlert) {
      currentAlert.remove()
    }
  }

  // Clear Fields
  clearFields() {
    this.titleInput.value = ''
    this.bodyInput.value = ''
  }

  // Fill Form to edit
  fillForm(data) {
    this.idInput.value = data.id
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
  }
}


export const ui = new UI;