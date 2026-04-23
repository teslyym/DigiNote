import React, { useEffect, useState } from "react";

const Archive = () => {
  const [notes, setNotes] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  const fetchArchivedNotes = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/notes?userId=${user.id}&archived=true`,
      );
      const data = await res.json();
      setNotes(data);
    } catch (error) {
      console.log("Error fetching archived notes:", error);
    }
  };

  useEffect(() => {
    if (user?.id) {
      fetchArchivedNotes();
    }
  }, []);

  const handleUnarchive = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/notes/${id}/unarchive`, {
        method: "PUT",
      });

      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    } catch (error) {
      console.log("Error unarchiving note:", error);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Archived Notes
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Notes you have archived will appear here.
        </p>
      </div>

      {notes.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
          <div className="mb-4 text-5xl">📦</div>
          <h2 className="text-xl font-semibold text-slate-800">
            No archived notes
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Archived notes will show up here.
          </p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {notes.map((note) => (
            <div
              key={note._id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-lg font-semibold text-slate-800">
                  {note.title}
                </h2>
                <button
                  onClick={() => handleUnarchive(note._id)}
                  className="text-sm font-medium text-blue-500 hover:text-blue-700"
                >
                  Restore
                </button>
              </div>

              <div className="mt-2">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                  {note.category || "Personal"}
                </span>
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
    </div>
  );
};

export default Archive;
