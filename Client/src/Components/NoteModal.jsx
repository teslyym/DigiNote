import React, { useEffect, useState } from "react";

const NoteModal = ({ isOpen, onClose, onSave, noteToEdit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Personal");
  const [hasReminder, setHasReminder] = useState(false);
  const [reminderDate, setReminderDate] = useState("");

  useEffect(() => {
    if (noteToEdit) {
      setTitle(noteToEdit.title);
      setContent(noteToEdit.content);
      setCategory(noteToEdit.category || "Personal");
      setHasReminder(noteToEdit.hasReminder || false);
      setReminderDate(
        noteToEdit.reminderDate
          ? new Date(noteToEdit.reminderDate).toISOString().slice(0, 16)
          : "",
      );
    } else {
      setTitle("");
      setContent("");
      setCategory("Personal");
      setHasReminder(false);
      setReminderDate("");
    }
  }, [noteToEdit, isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    if (!title.trim() || !content.trim()) return;

    onSave({
      ...noteToEdit,
      title,
      content,
      category,
      hasReminder,
      reminderDate: hasReminder ? new Date(reminderDate).toISOString() : null,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <h2 className="mb-4 text-xl font-bold text-slate-900">
          {noteToEdit ? "Edit Note" : "New Note"}
        </h2>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mb-3 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
        />

        <textarea
          placeholder="Write your note..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="h-32 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mb-3 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
        >
          <option value="Personal">Personal</option>
          <option value="Work">Work</option>
          <option value="Study">Study</option>
        </select>

        <div className="mt-4 flex items-center justify-between">
          <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
            <input
              type="checkbox"
              checked={hasReminder}
              onChange={(e) => setHasReminder(e.target.checked)}
              className="form-checkbox"
            />
            Set Reminder
          </label>

          {hasReminder && (
            <input
              type="datetime-local"
              value={reminderDate}
              onChange={(e) => setReminderDate(e.target.value)}
              className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
            />
          )}
        </div>

        <div className="mt-4 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-xl px-4 py-2 text-sm text-slate-600"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm text-white"
          >
            {noteToEdit ? "Update" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteModal;
