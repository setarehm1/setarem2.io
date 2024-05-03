document.addEventListener('DOMContentLoaded', function () {
  const addNoteBtn = document.getElementById('addNoteBtn');
  const notesList = document.getElementById('notesList');

  addNoteBtn.addEventListener('click', function () {
    const noteTitle = document.getElementById('noteTitle').value;
    const noteDescription = document.getElementById('noteDescription').value;

    if (noteTitle.trim() === '' || noteDescription.trim() === '') {
      alert('Please enter both title and description for the note.');
      return;
    }

    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `<h3>${noteTitle}</h3><p>${noteDescription}</p>`;
    notesList.appendChild(note);

    // Clear input fields after adding note
    document.getElementById('noteTitle').value = '';
    document.getElementById('noteDescription').value = '';
  });
});
