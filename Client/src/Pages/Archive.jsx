import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Archive = () => {
  const [notes, setNotes] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  const fetchArchivedNotes = async () => {
    if (!user?.id) return;

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/notes?userId=${user.id}&archived=true`,
      );
      const data = await res.json();

      if (!res.ok) {
        console.log("Fetch archived notes failed:", data.message);
        toast.error("Failed to fetch archived notes.");
        return;
      }

      setNotes(data);
    } catch (error) {
      console.log("Error fetching archived notes:", error);
      toast.error("Failed to fetch archived notes.");
    }
  };

  useEffect(() => {
    if (user?.id) {
      fetchArchivedNotes();
    }
  }, []);

  const handleUnarchive = async (id) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/notes/${id}/unarchive`,
        {
          method: "PUT",
        },
      );

      const data = await res.json();

      if (!res.ok) {
        console.log("Unarchive failed:", data.message);
        toast.error("Failed to restore note.");
        return;
      }

      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
      toast.success("Note restored");
    } catch (error) {
      console.log("Error unarchiving note:", error);
      toast.error("Failed to restore note.");
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
        <div className="flex min-h-[420px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-gradient-to-br from-white to-slate-50 px-6 text-center shadow-sm">
          <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 text-5xl shadow-sm">
            📦
          </div>

          <h2 className="text-2xl font-bold text-slate-800">
            No archived notes
          </h2>

          <p className="mt-3 max-w-md text-sm leading-6 text-slate-500 sm:text-base">
            Notes you archive will be stored here, so you can restore them
            whenever you need them again.
          </p>
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

              {note.hasReminder && note.reminderDate && (
                <p className="mt-2 text-xs font-medium text-amber-600">
                  ⏰ {new Date(note.reminderDate).toLocaleString()}
                </p>
              )}

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
