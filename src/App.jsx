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

  return (
    <div>
      {selectedNote ? (
        <NoteItem
          note={selectedNote}
          isOpen={true}
          onBack={handleBackClick}
          onDelete={handleDeleteClick}
        />
      ) : (
        <NotesList
          notes={notes}
          onNoteClick={handleNoteClick}
        />
      )}
    </div>
  );
};

export default App;
