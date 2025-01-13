import React from "react";
import "./index.css";

const Header = (props) => {

  const handleSearchInput = (e) => {
    props.onSearch(e.target.value);

  }

    /* This part is JSX */
    return (
      <header className="app-header">
        <h1 className="app-header_title">New Notes</h1>
        <aside className="app-header_controls">
          <button className="add-new" onClick={props.addNote}>+ New Note</button>
          <input type="text" className="search" placeholder="Type here to search..." 
          value={props.searchText} 
          onChange={handleSearchInput}></input>
        </aside>
      </header>
    )
}

export default Header

