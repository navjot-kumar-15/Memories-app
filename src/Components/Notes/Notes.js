import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../../Context/Notes/NoteContext";
import NotesItem from "./NotesItem";
import "./Notes.css";
import { useNavigate } from "react-router-dom";

function Notes(props) {
  const { showAlert } = props;
  const context = useContext(noteContext);
  const { notes, getNote, upadateNote } = context;
  const navigate = useNavigate();
  // Getting all the notes by using useEffect
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNote();
    } else {
      navigate("/login");
      // eslint-disable-next-line
    }
  }, []);
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const ref = useRef(null);
  const refClose = useRef(null);
  const update = (currNote) => {
    ref.current.click();
    setNote({
      id: currNote._id,
      etitle: currNote.title,
      edescription: currNote.description,
      etag: currNote.tag,
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    upadateNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
    // addNote(note.title, note.description, note.tag);
    props.showAlert("Updated Successfully ", "success");
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
    // console.log(e);
  };
  return (
    <>
      {/* Adding a modal  */}
      <button
        ref={ref}
        type="button"
        className="btn d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      ></button>

      <div
        className="modal fade "
        style={{ marginTop: "10rem" }}
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title-h " id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* body start */}

              <div className="text-start container  ">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label modal-title">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control modal-input"
                    id="etitle"
                    name="etitle"
                    aria-describedby="emailHelp"
                    value={note.etitle}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="description"
                    className="form-label modal-title"
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control modal-input"
                    id="edescription"
                    name="edescription"
                    value={note.edescription}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label modal-title">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control modal-input"
                    id="etag"
                    name="etag"
                    value={note.etag}
                    onChange={onChange}
                  />
                </div>
              </div>

              {/* body end */}
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary modal-btn"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                disabled={note.etitle.length < 5 || note.edescription < 5}
                onClick={handleClick}
                type="button"
                className="btn btn-primary modal-btn"
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-center flex-wrap">
        <div className="row  mb-5">
          <h1>Your Note's</h1>
          <div className="container">
            {/* If there is empty note then show this */}
            {notes.length === 0 && "No notes here to display"}
          </div>
          {notes.map((note) => {
            return (
              <NotesItem
                key={note._id}
                update={update}
                showAlert={showAlert}
                note={note}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Notes;
