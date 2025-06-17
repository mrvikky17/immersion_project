const notesContainer = document.getElementById('notes-container');
        const noteInput = document.getElementById('note-input');
        const addNoteBtn = document.getElementById('add-note-btn');

        addNoteBtn.addEventListener('click', () => {
            const noteText = noteInput.value.trim();
            if (noteText) {
                const noteDiv = document.createElement('div');
                noteDiv.textContent = noteText;
                noteDiv.style.border = '5px solid';
                noteDiv.style.height = '200px';
                noteDiv.style.width = '250px';
                noteDiv.style.borderImage = 'linear-gradient(to right, green, white)2';
                noteDiv.style.margin = '5px';
                noteDiv.style.cursor = 'pointer';
                notesContainer.appendChild(noteDiv);
                noteInput.value = '';

                noteDiv.addEventListener('dblclick', () => {
                    alert('Are you sure you want to delete this note?');
                    notesContainer.removeChild(noteDiv);
                });
            }
        });