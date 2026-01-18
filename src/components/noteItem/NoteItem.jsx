import './NoteItem.css';

function NoteItem({ note, onNoteClick, onBack, onDelete, isOpen }) {
  let clickHandler;
  if (!isOpen) {
    clickHandler = () => onNoteClick(note.idx);
  } else {
    clickHandler = undefined;
  }

  let content;
  if (isOpen) {
    content = note.info;
  } else {
    content = note.info.slice(0, 40) + '...';
  }

  return (
    <div className="Note" onClick={clickHandler}>
      <h2>{note.title}</h2>
      <h4>{note.user}</h4>

      <p>{content}</p>

      {isOpen && (
        <div>
          <button onClick={onBack}>Back</button>
          <button onClick={() => onDelete(note.idx)}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default NoteItem;
