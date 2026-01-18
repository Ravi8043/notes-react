import NotesList from './components/notesList/NotesList';
import NoteItem from './components/noteItem/NoteItem';
import { useState } from 'react';

const App = () => {
  const [notes, setNotes] = useState([
    { idx: 1, user: 'dark', title: 'hey', info: 'first note' },
    { idx: 2, user: 'ravi', title: 'hello', info: 'second note' },
    { idx: 3, user: 'surya', title: 'heyooo', info: 'third note' }
  ]);

  const [selectedNoteId, setSelectedNoteId] = useState(null);

  const handleNoteClick = (idx) => {
    setSelectedNoteId(idx);
  };

  const handleBackClick = () => {
    setSelectedNoteId(null);
  };

  const handleDeleteClick = (idx) => {
    setNotes(notes.filter(note => note.idx !== idx));
    setSelectedNoteId(null);
  };

  const selectedNote = notes.find(
    note => note.idx === selectedNoteId
  );

  const handleUpdateClick = (idx, updatedTitle, updatedInfo) => {
  setNotes(notes.map(note => 
    note.idx === idx ? { ...note, title: updatedTitle, info: updatedInfo } : note
  ));
};
  const handleAddNote = () => {
  const newNote = {
    idx: Date.now(), // Generates a unique ID based on the timestamp
    user: 'User',    // You can set a default or leave it blank
    title: 'New Note',
    info: 'Type your note here...'
  };

  setNotes([...notes, newNote]); // Adds the new note to the existing list
  setSelectedNoteId(newNote.idx); // Automatically opens the new note
};
  return (
    <div className='main'>
      {selectedNote ? (
        <NoteItem
          note={selectedNote}
          isOpen={true}
          onBack={handleBackClick}
          onDelete={handleDeleteClick}
          onUpdate={handleUpdateClick}
        />
      ) : (
        <>
        {/* Added the "New Note" button here */}
        <button className="add-btn" onClick={handleAddNote}>+ New Note</button>
        <NotesList
          notes={notes}
          onNoteClick={handleNoteClick}
        />
      </>
      )}
    </div>
  );
};

export default App;
