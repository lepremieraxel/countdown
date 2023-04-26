function openDelModal(){
  // div modal
  const delModal = document.createElement('div');
  delModal.classList.add('delModal');

  // h2
  const delModalTitle = document.createElement('h2');
  delModalTitle.textContent = "Are you sure to delete this countdown ?";
  delModal.appendChild(delModalTitle);

  // table
  const delModalTable = document.createElement('table');
  delModalTable.setAttribute('id', 'list');

  // table thead
  const delModalThead = document.createElement('thead');
}