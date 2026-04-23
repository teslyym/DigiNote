import React, { useEffect, useState } from "react";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/notes") // your backend endpoint
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-slate-900">My Notes</h1>
        <button className="rounded-xl bg-blue-600 px-5 py-2 text-white">
          + New Note
        </button>
      </div>

      {/* Empty state */}
      {notes.length === 0 ? (
        <div className="text-center text-slate-500 mt-20">
          <p>No notes yet.</p>
          <p className="text-sm">Create your first note to get started.</p>
        </div>
      ) : (
        /* Notes grid */
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {notes.map((note) => (
            <div
              key={note._id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h2 className="text-lg font-semibold text-slate-800">
                {note.title}
              </h2>
              <p className="mt-3 text-sm text-slate-600">{note.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notes;
