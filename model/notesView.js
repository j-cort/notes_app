const NotesModel = require('./notesModel')

class NotesView {
  constructor(model) {
    this.model = model
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayNotes() {
    this.model.getNotes().forEach(note => {
      const noteEl = document.createElement('div')
      noteEl.classList.add('note')
      // noteEl.className = 'note';
      noteEl.innerText = note
      this.mainContainerEl.append(noteEl)
    })
  }
}

module.exports = NotesView