import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Reminders = () => {
  const [notes, setNotes] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  const fetchReminderNotes = async () => {
    if (!user?.id) return;

    try {
      const res = await fetch(
        `http://localhost:5000/api/notes/reminders/list?userId=${user.id}`,
      );
      const data = await res.json();

      if (!res.ok) {
        console.log("Fetch reminders failed:", data.message);
        toast.error("Failed to fetch reminders.");
        return;
      }

      setNotes(data);
    } catch (error) {
      console.log("Error fetching reminder notes:", error);
      toast.error("Failed to fetch reminders.");
    }
  };

  useEffect(() => {
    if (user?.id) {
      fetchReminderNotes();
    }
  }, []);

  const handleClearReminder = async (note) => {
    try {
      const res = await fetch(`http://localhost:5000/api/notes/${note._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: note.title,
          content: note.content,
          category: note.category,
          hasReminder: false,
          reminderDate: null,
          userId: user.id,
        }),
      });

      const updatedNote = await res.json();

      if (!res.ok) {
        console.log("Clear reminder failed:", updatedNote.message);
        toast.error("Failed to clear reminder.");
        return;
      }

      setNotes((prevNotes) =>
        prevNotes.filter((item) => item._id !== updatedNote._id),
      );

      toast.success("Reminder cleared");
    } catch (error) {
      console.log("Error clearing reminder:", error);
      toast.error("Failed to clear reminder.");
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Reminders
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Notes with reminders will appear here.
        </p>
      </div>

      {notes.length === 0 ? (
        <div className="flex min-h-[420px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-gradient-to-br from-white to-slate-50 px-6 text-center shadow-sm">
          <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-amber-50 text-5xl shadow-sm">
            ⏰
          </div>

          <h2 className="text-2xl font-bold text-slate-800">
            No reminders yet
          </h2>

          <p className="mt-3 max-w-md text-sm leading-6 text-slate-500 sm:text-base">
            Set a reminder on any note to keep track of important tasks,
            deadlines, or ideas you do not want to forget.
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
                  onClick={() => handleClearReminder(note)}
                  className="text-sm font-medium text-red-500 hover:text-red-700"
                >
                  Clear
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

              <p className="mt-4 text-sm font-medium text-amber-600">
                ⏰ {new Date(note.reminderDate).toLocaleString()}
              </p>

              <p className="mt-3 text-xs text-slate-400">
                Created: {new Date(note.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Reminders;
