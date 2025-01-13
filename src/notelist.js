import React from "react";
import Note from "./note";

const NoteList = (props) => {

  const filteredNotes = props.notes.filter((note) => note.title.toLowerCase().includes(props.searchText.toLowerCase()));
  // There is alot going on. First props is passed from app.js, props has a notes object. 
  // 1) each note is converted to lowercase, then compared to the lowercase for the text in the (search text)
  // Filtered notes is the only notes that satisfy the requirement. 


  return <ul className="notes-list">{filteredNotes.map((note) => (
    <Note /* this renders a note component for each note */
    key={note.id}
    note={note}
    onType={props.onType}
    removeNote={props.removeNote}
  />
  ))}</ul>;
};

export default NoteList;
