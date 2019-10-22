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
    this.titleInput.value = '';
    this.bodyInput.value = '';
  }

  // Clear ID input
  clearIDInput() {
    this.idInput.value = '';
  }
  // Fill Form to edit
  fillForm(data) {
    this.idInput.value = data.id
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;

    this.changeFormState('edit');
  }
  //Change form state
  changeFormState(type) {
   if(type === 'edit') {
     this.postSubmit.textContent = 'Update Post';
     this.postSubmit.className = 'post-submit btn btn-warning btn-block';

    //  Create Cancel Button
    const button = document.createElement('button');
    button.className = 'post-cancel btn btn-light btn-block';
    button.appendChild(document.createTextNode('Cancel Edit'));
    const cardForm = document.querySelector('.card-form');
    const formEnd = document.querySelector('.form-end');
    cardForm.insertBefore(button, formEnd);
   }else {
    this.postSubmit.textContent = 'Post It';
    this.postSubmit.className = 'post-submit btn btn-primary btn-block';
    // Remove Cancel Button
    if(document.querySelector('.post-cancel')) {
      document.querySelector('.post-cancel').remove()
    }
    //  Clear ID from hidden field
    this.clearIDInput();
    this.clearFields(); 
   }
  }
}


export const ui = new UI;