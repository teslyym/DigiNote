import React, { useEffect, useState } from "react";
import NoteModal from "../Components/NoteModal";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchNotes = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/notes");
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
      const res = await fetch("http://localhost:5000/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      });

      const data = await res.json();
      setNotes((prevNotes) => [data, ...prevNotes]);
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

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">My Notes</h1>
          <p className="mt-1 text-sm text-slate-500">
            Organize and access your notes in one place.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >
          + New Note
        </button>
      </div>

      {notes.length === 0 ? (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white text-center shadow-sm">
          <div className="mb-4 text-5xl">📝</div>
          <h2 className="text-xl font-semibold text-slate-800">No notes yet</h2>
          <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
            You have not created any notes yet. Start by adding your first note
            and keep your ideas organized.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-6 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Create First Note
          </button>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {notes.map((note) => (
            <div
              key={note._id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-lg font-semibold text-slate-800">
                  {note.title}
                </h2>
                <button
                  onClick={() => handleDeleteNote(note._id)}
                  className="text-sm font-medium text-red-500 transition hover:text-red-700"
                >
                  Delete
                </button>
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
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveNote}
      />
    </div>
  );
};

export default Notes;
