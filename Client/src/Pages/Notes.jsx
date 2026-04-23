import React, { useState } from "react";
import NoteModal from "../Components/NoteModal";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaveNote = (note) => {
    setNotes([...notes, { ...note, id: Date.now() }]);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-slate-900">My Notes</h1>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-5 py-2 rounded-xl"
        >
          + New Note
        </button>
      </div>

      {/* Notes */}
      {notes.length === 0 ? (
        <p className="text-slate-500">No notes yet</p>
      ) : (
        <div className="grid gap-4">
          {notes.map((note) => (
            <div
              key={note.id}
              className="p-4 border rounded-xl bg-white shadow-sm"
            >
              <h2 className="font-bold">{note.title}</h2>
              <p className="text-sm text-slate-600 mt-2">{note.content}</p>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      <NoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveNote}
      />
    </div>
  );
};

export default Notes;
