import { useState } from 'react'; // Import useState
import './NoteItem.css';

function NoteItem({ note, onNoteClick, onBack, onDelete, onUpdate, isOpen }) {
  // Local state for editing
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(note.title);
  const [editInfo, setEditInfo] = useState(note.info);

  const handleSave = () => {
    onUpdate(note.idx, editTitle, editInfo);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditTitle(note.title); // Reset to original if cancelled
    setEditInfo(note.info);
  };

  let clickHandler;
  if (!isOpen) {
    clickHandler = () => onNoteClick(note.idx);
  } else {
    clickHandler = undefined;
  }

  return (
    <div className="Note" onClick={clickHandler}>
      {isEditing ? (
        // EDIT MODE: Show input fields
        <div>
          <input 
            value={editTitle} 
            onChange={(e) => setEditTitle(e.target.value)} 
          />
          <textarea 
            value={editInfo} 
            onChange={(e) => setEditInfo(e.target.value)} 
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        // VIEW MODE: Show regular text
        <div>
          <h2>{note.title}</h2>
          <h4>{note.user}</h4>
          <p>{isOpen ? note.info : note.info.slice(0, 40) + '...'}</p>
        </div>
      )}

      {isOpen && !isEditing && (
        <div>
          <button onClick={onBack}>Back</button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(note.idx)}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default NoteItem;