import React, { useEffect, useState } from "react";
import NoteModal from "../Components/NoteModal";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [noteToEdit, setNoteToEdit] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");

  const fetchNotes = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/notes?userId=${user.id}`,
      );
      const data = await res.json();
      setNotes(data);
    } catch (error) {
      console.log("Error fetching notes:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleSaveNote = async (note) => {
    try {
      if (note._id) {
        const res = await fetch(`http://localhost:5000/api/notes/${note._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: note.title,
            content: note.content,
          }),
        });

        const updatedNote = await res.json();

        setNotes((prevNotes) =>
          prevNotes.map((n) => (n._id === updatedNote._id ? updatedNote : n)),
        );
      } else {
        const res = await fetch("http://localhost:5000/api/notes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: note.title,
            content: note.content,
            userId: user.id,
          }),
        });

        const newNote = await res.json();
        setNotes((prevNotes) => [newNote, ...prevNotes]);
      }

      setNoteToEdit(null);
    } catch (error) {
      console.log("Error saving note:", error);
    }
  };
  const handleDeleteNote = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/notes/${id}`, {
        method: "DELETE",
      });

      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    } catch (error) {
      console.log("Error deleting note:", error);
    }
  };

  const handleEditClick = (note) => {
    setNoteToEdit(note);
    setIsModalOpen(true);
  };

  const handleNewNoteClick = () => {
    setNoteToEdit(null);
    setIsModalOpen(true);
  };
  const filteredNotes = notes
    .filter((note) => {
      const search = searchTerm.toLowerCase();
      return (
        note.title.toLowerCase().includes(search) ||
        note.content.toLowerCase().includes(search)
      );
    })
    .sort((a, b) => {
      if (sortOrder === "newest") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      return new Date(a.createdAt) - new Date(b.createdAt);
    });

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            My Notes
          </h1>
          <p className="mt-1 max-w-md text-sm text-slate-500">
            Organize and access your notes in one place.
          </p>
        </div>

        <button
          onClick={handleNewNoteClick}
          className="w-full rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 sm:w-auto"
        >
          + New Note
        </button>
      </div>

      <div className="flex flex-col gap-3 md:flex-row">
        <input
          type="text"
          placeholder="Search notes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500"
        />

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

      {filteredNotes.length === 0 ? (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white text-center shadow-sm">
          <div className="mb-4 text-5xl">📝</div>
          <h2 className="text-xl font-semibold text-slate-800">
            {notes.length === 0 ? "No notes yet" : "No matching notes"}
          </h2>
          <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
            {notes.length === 0
              ? "You have not created any notes yet. Start by adding your first note and keep your ideas organized."
              : "Try a different search term or clear the search input."}
          </p>

          {notes.length === 0 && (
            <button
              onClick={handleNewNoteClick}
              className="mt-6 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Create First Note
            </button>
          )}
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filteredNotes.map((note) => (
            <div
              key={note._id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-lg font-semibold text-slate-800">
                  {note.title}
                </h2>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleEditClick(note)}
                    className="text-sm font-medium text-blue-500 hover:text-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteNote(note._id)}
                    className="text-sm font-medium text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {note.content}
              </p>

              <p className="mt-4 text-xs text-slate-400">
                {new Date(note.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}

      <NoteModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setNoteToEdit(null);
        }}
        onSave={handleSaveNote}
        noteToEdit={noteToEdit}
      />
    </div>
  );
};

export default Notes;
