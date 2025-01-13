import React from "react";

const Note = (props) => {
  return (
    <li className="note">
      <input
        type="text"
        placeholder="Title"
        className="note__title"
        value={props.note.title}
        onChange={(e) => props.onType(props.note.id, "title", e.target.value)}
      />
      <textarea
        placeholder="Description"
        className="note__description"
        value={props.note.description}
        onChange={(e) => props.onType(props.note.id, "description", e.target.value)}
      />
      <span onClick={() => props.removeNote(props.note.id)} className="note__delete">
        X
      </span>
    </li>
  );
};

export default Note;
