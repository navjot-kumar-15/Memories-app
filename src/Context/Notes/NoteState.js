import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const iniState = [];

  const [notes, setNotes] = useState(iniState);

  // Get note start ===============================================>>>>>>>>>>>>>>>>>>
  const getNote = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjNjM1NDkzNjcyZWExMGI4N2EwY2ZmIn0sImlhdCI6MTY3NDExMzUwNn0.83UbyBBtj5L7hj5LGqfQ8Q7rpaDc-g1LY8cQINx8dFw",
      },
    });
    const json = await response.json();
    setNotes(json);
  };
  // Get note end ===============================================>>>>>>>>>>>>>>>>>>>>

  // Add note start =============================================>>>>>>>>>>>>>>>>>>>>
  const addNote = async (title, description, tag) => {
    // API call
    // eslint-disable-next-line
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjNjM1NDkzNjcyZWExMGI4N2EwY2ZmIn0sImlhdCI6MTY3NDExMzUwNn0.83UbyBBtj5L7hj5LGqfQ8Q7rpaDc-g1LY8cQINx8dFw",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    setNotes(notes.concat(note));
  };

  // Add note end =====================================>>>>>>>>>>>>>>>>>>>>

  // Delete a note start ==============================>>>>>>>>>>>>>>>>>>>>
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjNjM1NDkzNjcyZWExMGI4N2EwY2ZmIn0sImlhdCI6MTY3NDExMzUwNn0.83UbyBBtj5L7hj5LGqfQ8Q7rpaDc-g1LY8cQINx8dFw",
      },
    });
    const json = await response.json();
    let newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };
  // Delete a note end =====================================>>>>>>>>>>>>>>>>>>>>

  // Update note start =====================================>>>>>>>>>>>>>>>>>>>>
  const upadateNote = async (id, title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjNjM1NDkzNjcyZWExMGI4N2EwY2ZmIn0sImlhdCI6MTY3NDExMzUwNn0.83UbyBBtj5L7hj5LGqfQ8Q7rpaDc-g1LY8cQINx8dFw",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    // eslint-disable-next-line
    const json = await response.json();
    let newNote = JSON.parse(JSON.stringify(notes));
    // Logic to update in client site
    for (let i = 0; i < newNote.length; i++) {
      const element = newNote[i];

      if (element._id === id) {
        newNote[i].title = title;
        newNote[i].description = description;
        newNote[i].tag = tag;
        break;
      }
    }
    setNotes(newNote);
  };
  // Update note end ===========================>>>>>>>>>>>>>>>>>

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, upadateNote, getNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
