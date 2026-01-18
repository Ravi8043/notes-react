import './NotesList.css';
import NoteItem from '../noteItem/NoteItem';

function NotesList({ notes, onNoteClick }) {
  return (
    <div className="NotesList">
      {notes.map((note) => (
        <NoteItem
          key={note.idx}
          note={note}
          isOpen={false}
          onNoteClick={onNoteClick}
        />
      ))}
    </div>
  );
}

export default NotesList;
