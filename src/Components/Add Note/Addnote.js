import React, { useContext, useState } from "react";
import "./Addnote.css";
import noteContext from "../../Context/Notes/NoteContext";

function Addnote(props) {
  const { showAlert } = props;
  const context = useContext(noteContext);
  // getting addnote from the NoteState
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    showAlert(" Note Added Successfully ", "success");
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container main text-start  add-cont ">
        <h2 className="mx-3">Add a Note </h2>
        <div className="row row-sm-12">
          <div className="col col-sm-12 col-xm-12  ">
            {/* Form  */}
            <form className="text-start container form my-4">
              <div className="mb-3">
                <label htmlFor="title" className="form-label title">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control text-capitalize	"
                  id="title"
                  name="title"
                  aria-describedby="emailHelp"
                  value={note.title}
                  onChange={onChange}
                  minLength={5}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label desc">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control text-capitalize"
                  id="description"
                  name="description"
                  value={note.description}
                  onChange={onChange}
                  minLength={5}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="tag" className="form-label tag">
                  Tag
                </label>
                <input
                  type="text"
                  className="form-control text-capitalize"
                  id="tag"
                  name="tag"
                  value={note.tag}
                  onChange={onChange}
                />
              </div>
              <button
                disabled={note.title.length < 5 || note.description < 5}
                type="submit"
                className="btn btn-primary"
                onClick={handleClick}
              >
                Add Note
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addnote;
