import React, {useState, useEffect} from "react";
import Header from "./header.js";
import "./index.css";
import NoteList from "./notelist"; // this is the main compoent of that file

const App = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // Save notes to localStorage whenever they change
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  

  const addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true,
    };
    setNotes([newNote, ...notes]);
  };

  return(
    <div>
    <Header
    addNote={addNote} // placeholder
    searchText={searchText} // passes current search text state to header
    onSearch={(text) => setSearchText(text)}
    />
    <NoteList
      notes={notes} // this pases the current notes state vlue
      searchText={searchText} // Again it is the current value, and it will be used to filter.
      removeNote={(id) => setNotes(notes.filter((note) => note.id !== id))}
      onType={(id, key, value) => 
        setNotes(
          notes.map((note) => // line below is a ternary operator. the []: part will change the value of either the title or descrpition property. other wise note stays unchanged in the new array being made. 
              note.id === id ? {...note, [key]: value} : note
          )
        )
      }
    />
    </div>
  )
};

export default App
